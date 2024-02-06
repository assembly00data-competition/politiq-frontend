"use client";
import { useState } from "react";

import styled from "styled-components";

import ChatbotContainer from "@components/chatbot/ChatbotContainer";
import ChatbotHeader from "@components/chatbot/ChatbotHeader";
import ChatbotInput from "@components/chatbot/ChatbotInput";
import ChatbotModal from "@components/chatbot/ChatbotModal";
import ChatbotRecommend from "@components/chatbot/ChatbotRecommend";

const options = [
  "안녕하세요 저는 보건의료 관련 종사자입니다. 제게 추천해줄만한 국회의원이나 위원회가 있을까요?",
  "자동차와 관련된 세미나를 주관하는 곳이 있을까요? 또 어느기관과 연결 되어 있는 지 알고 싶습니다 혹시 누구에게 물어보면 좋을까요?",
  "과학에 관심이 많은 정치인을 알고싶어요!",
];
const recommends = ["재정 이유", "발의 시점", "식품위생법이란?"];

export default function MemberSearch() {
  const [onModal, setOnModal] = useState<boolean>(true);

  return (
    <Container onClick={() => setOnModal(false)}>
      <ChatbotHeader title={"관심사 별 국회의원 추천"} />
      {onModal ? (
        <ChatbotModal options={options} setOnModal={setOnModal} />
      ) : (
        <>
          <ChatbotContainer type={"recommend"} />
          <ChatbotRecommend recommends={recommends} />
        </>
      )}
      <ChatbotInput type={"recommend"} />
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  gap: 20px;

  justify-content: flex-start;
  align-items: center;

  width: 100%;

  padding-bottom: 20px;

  overflow-y: hidden;
`;
