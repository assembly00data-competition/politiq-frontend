"use client";

import BoardHeader from "@components/board/BoardHeader";
import { useEffect, useState } from "react";

import styled from "styled-components";

import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineChat } from "react-icons/md";
import { MdOutlineBookmarkAdd } from "react-icons/md";

interface InfomationPostProps {
  params: { ORIG_NM: string };
}

const comments = [
  {
    name: "이민선",
    comment: "이 당 국회의원 중에서 가장 국민을 생각하는 의원님이세요.",
  },
  {
    name: "정봉기",
    comment:
      "이 위원회에 속해있는 의원님이군요, 내가 관심있는 정치인으로 등록해야겠어요.",
  },
  {
    name: "정연한",
    comment:
      "내가 뽑은 사람인데, 당선되어 다행이에요. 국민의 뜻을 잘 받들기를 바랍니다.",
  },
];

const getDataFromAPI = async (
  ORIG_NM: string
): Promise<AssemblyInfo | undefined> => {
  const baseurl =
    "https://open.assembly.go.kr/portal/openapi/nwvrqwxyaytdsfvhu";
  const key = process.env.NEXT_PUBLIC_ASSEMBLY_KEY!;
  const params = {
    // 필요한 query params를 {} 형태에 담아준다.
    key,
    type: "json",
    pSize: "1",
    ORIG_NM,
  };

  const queryString = new URLSearchParams(params).toString(); // url에 쓰기 적합한 querySting으로 return 해준다.
  const reqUrl = `${baseurl}?${queryString}`; // 완성된 요청 url

  try {
    const response = await fetch(reqUrl);
    const jsonData = await response.json();
    return jsonData.nwvrqwxyaytdsfvhu[1].row[0];
  } catch (error) {
    console.log(error);
  }
};

export default function InfomationPost({ params }: InfomationPostProps) {
  const [post, setPost] = useState<{
    title: string;
    content: AssemblyInfo;
  }>();

  useEffect(() => {
    const fetchData = async () => {
      const assemblyInfo = await getDataFromAPI(
        decodeURIComponent(params.ORIG_NM)
      );

      if (assemblyInfo) {
        const {
          HG_NM,
          POLY_NM,
          ORIG_NM,
          UNITS,
          CMITS,
          TEL_NO,
          ASSEM_ADDR,
          E_MAIL,
          HOMEPAGE,
        } = assemblyInfo;
        setPost({
          title: assemblyInfo.HG_NM,
          content: {
            HG_NM,
            POLY_NM,
            ORIG_NM,
            UNITS,
            CMITS,
            TEL_NO,
            ASSEM_ADDR,
            E_MAIL,
            HOMEPAGE,
          },
        });
      } else {
        return;
      }
    };

    fetchData();
  }, [params.ORIG_NM]);

  // 게시물 데이터가 없는 경우
  if (!post) {
    return <Container>{"데이터를 불러오는 중입니다."}</Container>;
  }

  // 게시물 데이터가 있는 경우
  return (
    <Container>
      <BoardHeader title={"국회의원 정보 게시판"} />
      <InfoContainer>
        <Title>{post.title} 국회의원</Title>
        <hr />
        {Object.values(post.content).map((content, index) => (
          <ContentContainer key={index}>
            <p>{content}</p>
          </ContentContainer>
        ))}
        <ButtonContainer>
          <IoMdHeartEmpty size={"1.6rem"} />
          <MdOutlineChat size={"1.6rem"} />
          <MdOutlineBookmarkAdd size={"1.6rem"} />
        </ButtonContainer>
      </InfoContainer>
      {comments.map((comment, index) => (
        <CommentContainer key={index}>
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

const Title = styled.p`
  font-size: 1.6rem;
`;

const ContentContainer = styled.div`
  flex-direction: row;
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
