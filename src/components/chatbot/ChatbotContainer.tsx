import styled from "styled-components";

import Logo from "@components/Logo";

const messages = [
  {
    id: 1,
    sender: "bot",
    content: "해당 법률안을 알아보세요",
    timestamp: new Date(),
  },
  {
    id: 2,
    sender: "user",
    content:
      "저는 [식품산업진흥법 일부개정법률안에 관심이 있어요] 에 대해 궁금합니다. 이 법안이 제정되는 이유에 대해 알고 싶어요",
    timestamp: new Date(),
  },
  {
    id: 3,
    sender: "bot",
    content:
      "최근 대한민국식품명인(이하 “식품명인”이라 함)의 표시를 한 김치를 제조하는 과정에서 썩은 배추와 곰팡이 핀 무 등 불량 식자재가 사용된 사실이 드러나 국민들의 공분을 사고 있음.",
    timestamp: new Date(),
  },
  {
    id: 4,
    sender: "bot",
    content:
      "그런데 현행법은 식품명인으로 지정된 자가 「농수산물의 원산지 표시 등에 관한 법률」을 위반한 경우 농림축산식품부장관이 식품명인의 지정을 취소할 수 있도록 규정하고 있음에도, 「식품위생법」 위반과 관련하여서는 그 지정을 취소할 수 있는 근거 규정을 두고 있지 아니함.",
    timestamp: new Date(),
  },
  {
    id: 5,
    sender: "bot",
    content:
      "이에 식품명인이 「식품위생법」을 위반하여 벌금 이상의 형을 선고받아 그 형이 확정된 경우에도 농림축산식품부장관이 그 지정을 취소할 수 있도록 함으로써 식품명인 식품의 품질수준을 유지하고 소비자 보호에도 만전을 기하려는 것임 (안 제14조제6항제5호 신설)",
    timestamp: new Date(),
  },
];

export default function ChatbotContainer() {
  return (
    <Container>
      {messages.map((message) =>
        message.sender === "bot" ? (
          <div
            key={message.id}
            style={{ flexDirection: "row", gap: 10, alignSelf: "flex-start" }}
          >
            <Logo />
            <BotMessage>{message.content}</BotMessage>
          </div>
        ) : (
          <UserMessage key={message.id}>{message.content}</UserMessage>
        )
      )}
    </Container>
  );
}

const Container = styled.div`
  gap: 30px;

  align-items: center;

  width: 90%;

  overflow-y: auto;
`;

const BotMessage = styled.div`
  flex: 1;

  border-radius: 0 40px 40px 40px;

  padding: 25px;

  background-color: #e9eeff;
`;

const UserMessage = styled.div`
  align-self: flex-end;

  flex: 1;

  border-radius: 40px 0 40px 40px;

  padding: 25px;

  background-color: #ceefee;
`;
