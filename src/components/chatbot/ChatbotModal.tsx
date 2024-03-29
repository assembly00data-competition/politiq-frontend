import type { Dispatch, SetStateAction } from "react";

import styled from "styled-components";

import Logo from "@components/Logo";

import { IoMdClose } from "react-icons/io";
import { useRecoilState } from "recoil";
import { questionState } from "@recoil/atoms/questionAtom";

interface ChatbotModalProps {
  options: string[];
  setOnModal: Dispatch<SetStateAction<boolean>>;
}

export default function ChatbotModal({
  options,
  setOnModal,
}: ChatbotModalProps) {
  const [_, setQuestion] = useRecoilState(questionState);

  const handleModal = () => {
    setOnModal(false);
  };

  // 모달 내부 클릭 시 이벤트 버블링을 막는 함수
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleOption = (option: string) => {
    setOnModal(false);
    setQuestion(option);
  };

  return (
    <Container onClick={handleModalClick}>
      <CloseButton>
        <IoMdClose size={"2rem"} onClick={handleModal} />
      </CloseButton>
      <Logo />
      {options.map((option, index) => (
        <OptionContainer key={index}>
          <Option onClick={() => handleOption(option)}>{option}</Option>
        </OptionContainer>
      ))}
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  gap: 20px;

  justify-content: center;
  align-items: center;

  width: 90%;
  height: 90%;

  border: 7px solid transparent;
  border-radius: 50px;

  background-image: linear-gradient(white, white),
    linear-gradient(rgba(206, 239, 238, 0.4), rgba(233, 238, 255, 1));
  background-origin: border-box;
  background-clip: content-box, border-box;

  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const OptionContainer = styled.div`
  justify-content: space-around;
  align-items: center;

  width: 90%;
`;

const Option = styled.div`
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 90px;

  font-size: 1.2rem;
  text-align: center;

  background-color: #ceefee66;
  border-radius: 32px;

  padding: 10px 10%;
`;
