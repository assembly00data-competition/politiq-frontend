"use client";

import styled from "styled-components";

interface BoardHeaderProps {
  title: string;
}

export default function BoardHeader({ title }: BoardHeaderProps) {
  return <Container>{title}</Container>;
}

const Container = styled.p`
  width: 100%;

  font-size: 1.6rem;

  margin: 10px 0;
`;
