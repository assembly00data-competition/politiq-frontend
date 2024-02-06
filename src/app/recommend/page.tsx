"use client";
import { useState } from "react";

import styled from "styled-components";

import ChatbotContainer from "@components/chatbot/ChatbotContainer";
import ChatbotHeader from "@components/chatbot/ChatbotHeader";
import ChatbotInput from "@components/chatbot/ChatbotInput";
import ChatbotModal from "@components/chatbot/ChatbotModal";
import ChatbotRecommend from "@components/chatbot/ChatbotRecommend";

const options = [
  "최근 개정된 주택임대차보호법의 주요 변경 사항은 무엇인가요?",
  "개인정보 보호법에서 정의하는 '개인정보'의 범위에는 어떤 것들이 포함되나요?",
  "프리랜서가 지켜야 할 세금 관련 법률은 어떤 것들이 있나요?",
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
