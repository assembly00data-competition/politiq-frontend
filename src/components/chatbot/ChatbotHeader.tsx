import styled from "styled-components";

import { IoEllipsisVerticalSharp } from "react-icons/io5";

interface ChatbotHeaderProps {
  title: string;
}

export default function ChatbotHeader({ title }: ChatbotHeaderProps) {
  return (
    <Container>
      <div style={{ width: "1.6rem" }} />
      <Title>{title}</Title>
      <IoEllipsisVerticalSharp size={"1.6rem"} fill={"grey"} />
    </Container>
  );
}

const Container = styled.div`
  flex-direction: row;

  justify-content: space-around;
  align-items: center;

  width: 100%;

  margin: 10px 0;
`;

const Title = styled.p`
  font-size: 1.6rem;
`;
