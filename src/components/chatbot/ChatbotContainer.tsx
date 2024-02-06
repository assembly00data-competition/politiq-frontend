import styled from "styled-components";

import Logo from "@components/Logo";
import { chatLogState } from "@recoil/atoms/chatLogAtom";
import { useRecoilState } from "recoil";
import { useState } from "react";

interface ChatbotContainerProps {
  type: string;
}

export default function ChatbotContainer({ type }: ChatbotContainerProps) {
  const [chatLog, _] = useRecoilState(chatLogState);

  return (
    <Container>
      {chatLog.map((log, index) =>
        log.sender === "bot" && log.type === type ? (
          <div
            key={index}
            style={{ flexDirection: "row", gap: 10, alignSelf: "flex-start" }}
          >
            <Logo />
            <BotMessage>{log.content}</BotMessage>
          </div>
        ) : log.sender === "user" && log.type === type ? (
          <UserMessage key={index}>{log.content}</UserMessage>
        ) : null
      )}
    </Container>
  );
}

const Container = styled.div`
  gap: 30px;

  align-items: center;

  width: 90%;
  height: 100%;

  overflow-y: auto;
`;

const BotMessage = styled.div`
  border-radius: 0 40px 40px 40px;

  padding: 25px;

  background-color: #e9eeff;
`;

const UserMessage = styled.div`
  align-self: flex-end;

  border-radius: 40px 0 40px 40px;

  padding: 25px;

  background-color: #ceefee;
`;
