"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Intro() {
  return (
    <Container>
      <StyledImage
        src={"/assembly.jpg"}
        alt="메인 화면 배경"
        width={0}
        height={0}
        sizes="100vw"
      />
      <Overlay>
        <Title>{"PoiltIQ"}</Title>
        <StartButtonContainer>
          <StartButton href={"/main"}>{"START"}</StartButton>
        </StartButtonContainer>
      </Overlay>
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: white;
`;

const StyledImage = styled(Image)`
  width: auto;
  height: 100%;

  filter: brightness(1.1) saturate(1.3) opacity(0.4);
`;

const Overlay = styled.div`
  position: absolute;

  justify-content: space-between;
  align-items: center;

  height: 100%;
  width: 100%;

  padding-top: 7rem;
`;

const Title = styled.p`
  font-size: 3.5rem;
  font-weight: 700;
`;

const StartButtonContainer = styled.div`
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: calc(3rem * 3);

  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));

  padding-bottom: 2rem;
`;

const StartButton = styled(Link)`
  font-size: 3rem;

  color: white;
`;
