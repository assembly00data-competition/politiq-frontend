import { questionState } from "@recoil/atoms/questionAtom";
import { useRecoilState } from "recoil";
import styled from "styled-components";

interface ChatbotRecommendProps {
  recommends: string[];
}

export default function ChatbotRecommend({
  recommends,
}: ChatbotRecommendProps) {
  const [_, setQuestion] = useRecoilState(questionState);

  const handleRecommend = (recommend: string) => {
    setQuestion(recommend);
  };

  return (
    <RecommendContainer>
      {recommends.map((recommend, index) => (
        <Recommend key={index} onClick={() => handleRecommend(recommend)}>
          {recommend}
        </Recommend>
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
