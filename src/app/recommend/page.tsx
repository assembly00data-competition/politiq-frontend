"use client";
import { useState } from "react";

import styled from "styled-components";

import ChatbotContainer from "@components/chatbot/ChatbotContainer";
import ChatbotHeader from "@components/chatbot/ChatbotHeader";
import ChatbotInput from "@components/chatbot/ChatbotInput";
import ChatbotModal from "@components/chatbot/ChatbotModal";
import ChatbotRecommend from "@components/chatbot/ChatbotRecommend";

export default function MemberSearch() {
  const [onModal, setOnModal] = useState<boolean>(true);

  return (
    <Container onClick={() => setOnModal(false)}>
      <ChatbotHeader title={"법률안 별 국회의원 추천"} />
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
