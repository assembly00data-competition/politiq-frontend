"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

import BoardContent from "@components/board/BoardContent";
import BoardHeader from "@components/board/BoardHeader";
import BoardSearch from "@components/board/BoardSearch";

const getDataFromAPI = async (): Promise<AssemblyInfo[] | undefined> => {
  const baseurl =
    "https://open.assembly.go.kr/portal/openapi/nwvrqwxyaytdsfvhu";

  const key = process.env.NEXT_PUBLIC_ASSEMBLY_KEY!;
  const params = {
    // 필요한 query params를 {} 형태에 담아준다.
    key,
    type: "json",
    pSize: "300",
  };

  const queryString = new URLSearchParams(params).toString(); // url에 쓰기 적합한 querySting으로 return 해준다.
  const reqUrl = `${baseurl}?${queryString}`; // 완성된 요청 url

  try {
    const response = await fetch(reqUrl);
    const jsonData = await response.json();
    return jsonData.nwvrqwxyaytdsfvhu[1].row;
  } catch (error) {
    console.log(error);
  }
};

export default function Infomation() {
  const [boardContents, setBoardContents] = useState<InformationPost[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDataFromAPI();
      setBoardContents(
        response?.map((info) => ({ title: info.HG_NM, content: info }))
      );
    };

    fetchData();
  }, []);

  return (
    <Container>
      <BoardHeader title={"국회의원 정보 게시판"} />
      <BoardSearch />

      <BoardContainer>
        {boardContents &&
          boardContents.map((boardContent, index) => (
            <BoardContent
              key={index}
              id={boardContent.content.ORIG_NM}
              title={boardContent.title + " 국회의원"}
              content={boardContent.content.ORIG_NM}
            />
          ))}
      </BoardContainer>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  gap: 20px;

  justify-content: flex-start;
  align-items: center;

  width: 100%;

  background-color: #ceefee66;

  padding: 0 5%;
  padding-bottom: 20px;

  overflow-y: hidden;
`;

const BoardContainer = styled.div`
  gap: 15px;

  width: 100%;

  overflow: auto;
`;
