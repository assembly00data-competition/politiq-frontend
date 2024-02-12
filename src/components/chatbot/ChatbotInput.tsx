import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";

import styled from "styled-components";

import { MdSend } from "react-icons/md";
import { questionState } from "@recoil/atoms/questionAtom";
import { useRecoilState } from "recoil";
import { chatLogState } from "@recoil/atoms/chatLogAtom";

interface ChatbotInputProps {
  type: string;
}

export default function ChatbotInput({ type }: ChatbotInputProps) {
  const MIN_HEIGHT = "1.3rem";

  const [question, setQuestion] = useRecoilState(questionState);
  const [chatLog, setChatLog] = useRecoilState(chatLogState);

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

  const handleSend = async () => {
    const content = text;
    setText("");

    setChatLog((prev) => [...prev, { type, sender: "user", content }]);

    if (content.match("기대효과")) {
      const response = await fetch("/api/question", {
        method: "POST",
        body: JSON.stringify({
          content,
          type,
          effect: chatLog[chatLog.length - 1],
        }),
        headers: { "Content-Type": "application/json" },
      });

      const jsonData = await response.json();

      setChatLog((prev) => [
        ...prev,
        { type, sender: "bot", content: jsonData },
      ]);
    } else {
      const response = await fetch("/api/question", {
        method: "POST",
        body: JSON.stringify({
          content,
          type,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const jsonData = await response.json();

      setChatLog((prev) => [
        ...prev,
        { type, sender: "bot", content: jsonData },
      ]);
    }
  };

  useEffect(() => {
    if (question) {
      setText(question);
      setQuestion("");
    }
  }, [question, setQuestion]);

  return (
    <InputContainer>
      <TextInput
        placeholder={"메세지 보내기..."}
        height={textareaHeight}
        onChange={handleChange}
        value={text}
      />
      <MdSend onClick={() => handleSend()} size={"1.8rem"} fill={"#9D9D9D"} />
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
