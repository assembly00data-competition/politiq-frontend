import styled from "styled-components";

const recommends = ["재정 이유", "발의 시점", "식품위생법이란?"];

export default function ChatbotRecommend() {
  return (
    <RecommendContainer>
      {recommends.map((recommend, index) => (
        <Recommend key={index}>{recommend}</Recommend>
      ))}
    </RecommendContainer>
  );
}

const RecommendContainer = styled.div`
  gap: 10px;
  flex-direction: row;

  justify-content: center;
`;

const Recommend = styled.p`
  border: 1px solid #69c8b6;
  border-radius: 50px;

  padding: 10px 20px;
`;
