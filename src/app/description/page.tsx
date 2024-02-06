"use client";

import BoardHeader from "@components/board/BoardHeader";
import BoardSearch from "@components/board/BoardSearch";
import styled from "styled-components";

const descriptions = [
  {
    title: "내 한 표의 기대효과 챗봇",
    content:
      "내가 관심있는 국회의원이 발의한, 또는 원하는 분야 법률안의 기대효과 등 관련 정보를 얻기 위해 챗봇에게 물어보세요!",
  },
  {
    title: "법률안별 국회의원 추천 챗봇",
    content:
      "챗봇을 통해 관심있는 분야에 관한 법률안을 물어보세요!\n관련 법률안에 힘쓰는 국회의원,위원회 등을 추천해드립니다.",
  },
  {
    title: "국회의원 정보게시판",
    content:
      "국회의원 정보게시판은 국회의원에 대한 전체적인 정보가 담겨 있으며 원하는 국회의원의 정보를 얻을 수 있습니다.",
  },
  {
    title: "지난 회의 2분컷 요약게시판",
    content:
      "지난 회기의 본회의 회의록을 2분 내로 읽을 수 있도록 요약해 드립니다!",
  },
  {
    title: "상임위원회 키워드게시판",
    content:
      "추천해준 상임위원회, 또는 원하는 국회의원이 속해있는 위원회에 대해 워드클라우드로 소개해드립니다.",
  },
  {
    title: "추가 공지사항",
    content:
      "오류 수정 및 Q&A, FAQ는 국민프로듀서 여러분의 소중한 참여로 수정해드립니다.",
  },
];

export default function Description() {
  return (
    <Container>
      <BoardHeader title={"메뉴 기능 설명"} />
      <BoardSearch />
      <div style={{ gap: 10, overflow: "auto" }}>
        {descriptions.map((description, index) => (
          <ContentsContainer key={index}>
            <Title>{description.title}</Title>
            <Content>{description.content}</Content>
          </ContentsContainer>
        ))}
      </div>
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

const ContentsContainer = styled.div`
  gap: 3px;

  background-color: white;

  border-radius: 20px;

  padding: 15px;
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

const Content = styled.p`
  font-size: 1rem;
  line-height: 1.3rem;
`;
