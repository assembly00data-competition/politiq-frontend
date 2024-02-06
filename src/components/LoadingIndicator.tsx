"use client";

import styled, { keyframes } from "styled-components";

export default function LoadingIndicator() {
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  );
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
`;

const Loader = styled.div`
  border: 5px solid #f3f3f3; /* 밝은 회색 */
  border-top: 5px solid #3498db; /* 파란색 */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;
