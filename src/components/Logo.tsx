"use client";

import Image from "next/image";
import styled from "styled-components";

import assemblyCI from "@/../public/assemblyCI.svg";

export default function Logo() {
  return (
    <Container>
      <Image src={assemblyCI} alt={"로고"} width={60} height={60} priority />
    </Container>
  );
}

const Container = styled.div`
  flex-shrink: 0;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 70px;

  border-radius: 50%;

  padding-bottom: 4px;

  box-shadow:
    0 4px 4px 0 rgba(0, 0, 0, 0.25),
    inset 0 2px 4px 0 rgba(0, 0, 0, 0.25);
`;
