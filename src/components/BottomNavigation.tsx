"use client";

import styled from "styled-components";

import { TbUserSearch } from "react-icons/tb";
import { MdOutlineHowToVote } from "react-icons/md";

import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavigation() {
  const pathname = usePathname();

  const hideBottomNav = pathname === "/";

  if (!hideBottomNav) {
    return (
      <Container>
        <Link href={"/recommend"}>
          <TbUserSearch size={40} color="#505557" />
        </Link>
        <Link href={"/main"}>
          <Logo />
        </Link>
        <Link href={"/influence"}>
          <MdOutlineHowToVote size={40} color="#505557" />
        </Link>
      </Container>
    );
  } else null;
}

const Container = styled.div`
  flex-direction: row;
  flex-grow: 0;

  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 80px;

  box-shadow: 0 -8px 8px 0 rgba(0, 0, 0, 0.1);

  background-color: white;
`;
