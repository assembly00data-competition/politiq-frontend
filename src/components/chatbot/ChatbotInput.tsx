import { useState } from "react";
import type { ChangeEvent } from "react";

import styled from "styled-components";

import { MdSend } from "react-icons/md";

export default function ChatbotInput() {
  const MIN_HEIGHT = "1.3rem";

  const [text, setText] = useState("");
  const [textareaHeight, setTextareaHeight] = useState(MIN_HEIGHT);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);

    // 높이를 설정하기 전에, 일시적으로 min-height로 설정하여
    // scrollHeight가 줄어드는 텍스트 양에 맞춰 조정될 수 있도록 한다.
    e.target.style.height = MIN_HEIGHT;
    const newHeight = `${e.target.scrollHeight}px`;
    setTextareaHeight(newHeight);

    // 실제 textarea의 높이를 업데이트
    e.target.style.height = newHeight;
  };

  return (
    <InputContainer>
      <TextInput
        placeholder={"메세지 보내기..."}
        height={textareaHeight}
        onChange={handleChange}
        value={text}
      />
      <MdSend size={"1.8rem"} fill={"#9D9D9D"} />
    </InputContainer>
  );
}

const InputContainer = styled.div`
  gap: 10px;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  width: 90%;

  border-radius: 50px;

  background-color: #fafafa;

  padding: 15px 20px 15px 30px;

  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
`;

const TextInput = styled.textarea<{ height: string }>`
  font-size: 1.3rem;

  width: 100%;
  height: ${(props) => props.height};
  min-height: 1.3rem;
  max-height: 10rem;

  overflow: hidden;
  resize: none;

  border: none;
  background-color: transparent;
`;
