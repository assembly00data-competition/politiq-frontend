"use client";

import BoardContent from "@components/board/BoardContent";
import BoardHeader from "@components/board/BoardHeader";
import BoardSearch from "@components/board/BoardSearch";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Summary() {
  const [boardContents, setboardContents] = useState<SummaryPost[]>();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getDataFromAPI();
  //     setboardContents(
  //       response?.map((info) => ({ title: info.HG_NM, content: info }))
  //     );
  //   };

  //   fetchData();
  // }, []);

  return (
    <Container>
      <BoardHeader title={"지난 회의록 2분컷 요약"} />
      <BoardSearch />

      <BoardContainer>
        {boardContents &&
          boardContents.map((boardContent, index) => (
            <BoardContent
              key={index}
              id={String(index + 1)}
              title={boardContent.title}
              content={boardContent.content.summary}
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

  padding: 0 5%;

  background-color: #ceefee66;

  padding-bottom: 20px;

  overflow-y: hidden;
`;

const BoardContainer = styled.div`
  gap: 15px;

  width: 100%;

  overflow: auto;
`;
