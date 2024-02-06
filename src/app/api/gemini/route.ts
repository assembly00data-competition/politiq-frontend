import fs from "fs";
import path from "path";
import pdfParse from "pdf-parse";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

const run = async (pdfText: string) => {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = "\n이 앞의 내용들을 요약해줄래?";

  const result = await model.generateContent(pdfText + prompt);
  const response = await result.response;
  const text = response.text();
  return text;
};

const fetchMeetingRecord = async (pdfUrl: string) => {
  const filePath = path.resolve("./public/pdf", "downloadedPdf.pdf"); // 파일 저장 경로 설정

  // Fetch API를 사용하여 PDF 파일 다운로드
  const response = await fetch(pdfUrl);
  if (!response.ok)
    throw new Error(`Failed to fetch ${pdfUrl}: ${response.statusText}`);

  // response.body를 arrayBuffer로 변환
  const buffer = await response.arrayBuffer();

  // fs.writeFileSync 또는 fs.writeFile을 사용하여 파일에 쓰기
  fs.writeFileSync(filePath, Buffer.from(buffer));
  console.log("Downloaded PDF file");

  return { message: "PDF 파일이 성공적으로 다운로드되었습니다." };
};

const readPdfText = async (filePath: string) => {
  const dataBuffer = fs.readFileSync(filePath);
  try {
    const data = await pdfParse(dataBuffer);
    // return data.text; // 추출된 텍스트 내용 전체 반환
    return data.text.split(0, 100); // 추출된 텍스트 내용 일부 반환
  } catch (error) {
    console.error("PDF 파일 읽기 실패:", error);
  }
};

export async function POST(request: Request) {
  try {
    const { pdfUrl } = await request.json();
    console.log(pdfUrl);

    const filePath = path.resolve("./public/pdf", "downloadedPdf.pdf"); // 파일 저장 경로 설정

    await fetchMeetingRecord(pdfUrl);

    // PDF에서 텍스트 추출
    const pdfText = await readPdfText(filePath);

    const finalResult = await run(pdfText!);

    return new Response(JSON.stringify({ result: finalResult }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
