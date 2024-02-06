"use client";

import styled from "styled-components";

import { IoMdSearch } from "react-icons/io";

export default function BoardSearch() {
  return (
    <Container>
      <Input placeholder={"검색하세요"} />
      <IoMdSearch size={"1.6rem"} />
    </Container>
  );
}

const Container = styled.div`
  flex-direction: row;
  gap: 10px;

  width: 100%;
  padding: 15px 25px;

  background-color: #fafafa;

  border-radius: 40px;

  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.2rem;

  border: none;
  background-color: transparent;
`;
