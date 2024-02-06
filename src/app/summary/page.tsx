"use client";

import BoardContent from "@components/board/BoardContent";
import BoardHeader from "@components/board/BoardHeader";
import BoardSearch from "@components/board/BoardSearch";
import { useEffect, useState } from "react";
import styled from "styled-components";

const getDataFromAPI = async (): Promise<MettingRecordInfo[] | undefined> => {
  try {
    const response = await fetch("/api/meetingrecord", { method: "POST" });
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

export default function Summary() {
  const [boardContents, setBoardContents] = useState<SummaryPost[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDataFromAPI();

      setBoardContents(
        response!.map((summary) => ({
          title: summary.TITLE,
          content: summary.SUB_NAME,
          pdfUrl: summary.PDF_LINK_URL,
        }))
      );
      console.log(response);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <BoardHeader title={"지난 회의록 2분컷 요약"} />
      <BoardSearch />

      <BoardContainer>
        {boardContents &&
          boardContents.map((boardContent, index) => (
            <BoardContent
              key={index}
              id={encodeURIComponent(boardContent.pdfUrl)}
              title={boardContent.title}
              content={boardContent.content}
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
