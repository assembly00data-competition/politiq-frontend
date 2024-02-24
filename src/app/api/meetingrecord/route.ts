const fetchMeetingRecordUrl = async (year: string) => {
  const baseurl =
    "https://open.assembly.go.kr/portal/openapi/nzbyfwhwaoanttzje";
  const key = process.env.ASSEMBLY_KEY!;
  const params = {
    // 필요한 query params를 {} 형태에 담아준다.
    key,
    type: "json",
    pSize: "300",
    DAE_NUM: "21",
    CONF_DATE: year,
  };

  const queryString = new URLSearchParams(params).toString(); // url에 쓰기 적합한 querySting으로 return 해준다.
  const reqUrl = `${baseurl}?${queryString}`; // 완성된 요청 url

  try {
    const response = await fetch(reqUrl);
    const jsonData = await response.json();
    return jsonData.nzbyfwhwaoanttzje[1].row;
  } catch (error) {
    console.log(error);
  }
};

export async function POST(request: Request) {
  try {
    const response = await fetchMeetingRecordUrl("2024");

    return new Response(JSON.stringify(response), {
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
