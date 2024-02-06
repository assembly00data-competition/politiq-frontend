import Link from "next/link";
import { usePathname } from "next/navigation";

import styled from "styled-components";

import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineChat } from "react-icons/md";

interface BoardContentProps {
  id: string;
  title: string;
  content: string;
}

export default function BoardContent({
  id,
  title,
  content,
}: BoardContentProps) {
  const pathname = usePathname();

  return (
    <Container href={`${pathname}/${id}`}>
      <div>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </div>
      <ButtonContainer>
        <IoMdHeartEmpty size={"1.6rem"} />
        <MdOutlineChat size={"1.6rem"} />
      </ButtonContainer>
    </Container>
  );
}

const Container = styled(Link)`
  justify-content: space-between;

  width: 100%;
  height: 150px;

  background-color: white;

  border-radius: 20px;

  padding: 15px;
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 700;

  line-height: 2rem;
`;

const Content = styled.p`
  display: -webkit-box;
  font-size: 1rem;
  line-height: 1.3rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  white-space: normal;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  flex-direction: row;
  gap: 5px;

  justify-content: flex-end;

  margin-right: 20px;
`;
