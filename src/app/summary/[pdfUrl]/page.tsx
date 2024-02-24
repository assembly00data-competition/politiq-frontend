"use client";

import BoardHeader from "@components/board/BoardHeader";
import { useEffect, useState } from "react";

import styled from "styled-components";

import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineChat } from "react-icons/md";
import { MdOutlineBookmarkAdd } from "react-icons/md";

interface SummaryPostProps {
  params: { title: string; pdfUrl: string };
}

const comments = [
  {
    name: "이민선",
    comment:
      "정치인들이 실제로 국민의 이익을 위해 논의하는 모습을 보니 희망적입니다. 이런 모습이 계속되길 바랍니다.",
  },
  {
    name: "정봉기",
    comment:
      "또 다시 끝없는 논쟁과 정쟁만 벌어지고, 실질적인 해결책은 나오지 않는군요. 정치가 변해야 하는데...",
  },
  {
    name: "정연한",
    comment:
      "이번 본회의에서도 A당은 실망스러운 태도를 보이네요. 변화가 필요합니다.",
  },
];

export default function SummaryPost({ params }: SummaryPostProps) {
  const [post, setPost] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const recordInfo = await fetch("/api/gemini", {
        method: "POST",
        body: JSON.stringify({ pdfUrl: decodeURIComponent(params.pdfUrl) }),
        headers: { "Content-Type": "application/json" },
      });

      const response = await recordInfo.json();

      setPost(response.result);
    };

    fetchData();
  }, [params.pdfUrl]);

  // 게시물 데이터가 없는 경우
  if (!post) {
    return <Container>{"데이터를 불러오는 중입니다."}</Container>;
  }

  // 게시물 데이터가 있는 경우
  return (
    <Container>
      <BoardHeader title={"지난 회의록 2분 컷 요약"} />
      <InfoContainer>
        <PostContainer>{post}</PostContainer>
        <ButtonContainer>
          <IoMdHeartEmpty size={"1.6rem"} />
          <MdOutlineChat size={"1.6rem"} />
          <MdOutlineBookmarkAdd size={"1.6rem"} />
        </ButtonContainer>
      </InfoContainer>
      {comments.map((comment, index) => (
        <CommentContainer key={index}>
          {/* <Profile /> */}
          <div style={{ flexShrink: 0, gap: 3 }}>
            <p>{"국민프로듀서"}</p>
            <p style={{ color: "#EC93AB", fontSize: "1.2rem" }}>
              {comment.name}
            </p>
          </div>
          <p>{comment.comment}</p>
        </CommentContainer>
      ))}
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  gap: 20px;

  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: #ceefee66;

  padding: 0 5%;
  padding-bottom: 20px;

  overflow-y: hidden;
`;

const InfoContainer = styled.div`
  gap: 10px;

  width: 100%;

  background-color: white;

  border-radius: 20px;

  padding: 15px;

  overflow: auto;
`;

const PostContainer = styled.div`
  line-height: 1.4rem;
`;

const ButtonContainer = styled.div`
  flex-direction: row;
  gap: 5px;

  justify-content: flex-end;
`;

const CommentContainer = styled.div`
  flex-direction: row;

  justify-content: space-between;

  gap: 10px;

  width: 100%;

  background-color: white;

  border-radius: 20px;

  padding: 15px;
`;
