"use client";

import { useState } from "react";

import styled from "styled-components";

import ChatbotContainer from "@components/chatbot/ChatbotContainer";
import ChatbotHeader from "@components/chatbot/ChatbotHeader";
import ChatbotInput from "@components/chatbot/ChatbotInput";
import ChatbotRecommend from "@components/chatbot/ChatbotRecommend";
import ChatbotModal from "@components/chatbot/ChatbotModal";

export default function Influence() {
  const [onModal, setOnModal] = useState<boolean>(true);

  return (
    <Container onClick={() => setOnModal(false)}>
      <ChatbotHeader title={"내 한 표의 기대효과"} />
      {onModal ? (
        <ChatbotModal setOnModal={setOnModal} />
      ) : (
        <>
          <ChatbotContainer />
          <ChatbotRecommend />
        </>
      )}
      <ChatbotInput />
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
