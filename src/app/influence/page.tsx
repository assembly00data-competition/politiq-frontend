"use client";

import { useState } from "react";

import styled from "styled-components";

import ChatbotContainer from "@components/chatbot/ChatbotContainer";
import ChatbotHeader from "@components/chatbot/ChatbotHeader";
import ChatbotInput from "@components/chatbot/ChatbotInput";
import ChatbotRecommend from "@components/chatbot/ChatbotRecommend";
import ChatbotModal from "@components/chatbot/ChatbotModal";

const options = [
  "안녕하세요 저는 보건의료 관련 종사자입니다. 제게 추천해줄만한 국회의원이나 위원회가 있을까요?",
  "자동차와 관련된 법안이 있는 지 또 이 법안이 누구와 연결 되어 있는 지 알고 싶습니다 혹시 누구에게 물어보면 좋을까요?",
  "식품산업의 건전성과 식품 소비자의 이익과 보호에 기여해 줄 수 있는 법안에 대해 알려주세요",
];
const recommends = ["재정 이유", "발의 시점", "식품위생법이란?"];

export default function Influence() {
  const [onModal, setOnModal] = useState<boolean>(true);

  return (
    <Container onClick={() => setOnModal(false)}>
      <ChatbotHeader title={"내 한 표의 기대효과"} />
      {onModal ? (
        <ChatbotModal options={options} setOnModal={setOnModal} />
      ) : (
        <>
          <ChatbotContainer type={"influence"} />
          <ChatbotRecommend recommends={recommends} />
        </>
      )}
      <ChatbotInput type={"influence"} />
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
