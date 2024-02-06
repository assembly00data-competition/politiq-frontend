"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import UserInfo from "@components/UserInfo";

import assemblyCI from "@/../public/assemblyCI.svg";
import assemblyMark from "@/../public/assemblyMark.svg";

import { PiChatsDuotone } from "react-icons/pi";
import { MdOutlineHowToVote } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { BiSolidFoodMenu } from "react-icons/bi";

export default function Menu() {
  return (
    <Container>
      <UserInfo />
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MenuLegend>{"MENU"}</MenuLegend>
        <MenuButtonContainer>
          <MenuButton href={"/information"}>
            <Image
              src={assemblyMark}
              alt={"국회 휘장"}
              width={80}
              height={80}
              priority
            />
            <MenuLable>{"국회의원\n정보 게시판"}</MenuLable>
          </MenuButton>
          <MenuButton href={"/recommend"}>
            <PiChatsDuotone size={80} />
            <MenuLable>{"법률안 별 국회의원\n추천 챗봇"}</MenuLable>
          </MenuButton>
          <MenuButton href={"/influence"}>
            <MdOutlineHowToVote size={80} />
            <MenuLable>{"내 한 표의\n기대효과 챗봇"}</MenuLable>
          </MenuButton>
          <MenuButton href={"/summary"}>
            <CgFileDocument size={80} />
            <MenuLable>{"지난 회의\n2분컷 요약 게시판"}</MenuLable>
          </MenuButton>
        </MenuButtonContainer>
      </div>
      <div style={{ gap: 10 }}>
        <BottomMenu href={"/keyword"}>
          <Image src={assemblyCI} alt={"국회 CI"} width={60} height={60} />
          <p>{"어떤 상임위원회가 있을까?"}</p>
        </BottomMenu>
        <BottomMenu href={"/description"}>
          <BiSolidFoodMenu size={45} />
          <p>{"메뉴에 대한 기능을 알고 싶다면?"}</p>
        </BottomMenu>
      </div>
    </Container>
  );
}

const Container = styled.div`
  justify-content: space-around;
  align-items: center;
  flex: 1;

  width: 100%;

  overflow-y: auto;
`;

const MenuButtonContainer = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;

  justify-content: center;
  align-items: center;
`;

const MenuLegend = styled.p`
  font-size: 2rem;

  margin-bottom: 20px;
`;

const MenuButton = styled(Link)`
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 150px;

  border-radius: 34px;

  background-color: rgba(222, 239, 238, 0.4);

  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

const MenuLable = styled.p`
  font-size: 1.1rem;

  white-space: pre-wrap;
  text-align: center;
  line-height: 1.5rem;
`;

const BottomMenu = styled(Link)`
  flex-direction: row;
  gap: 20px;

  justify-content: center;
  align-items: center;

  width: 330px;
  height: 60px;

  border-radius: 34px;

  background-color: #e9eeff;

  box-shadow: 0 4px 4px 0 rgba(248, 216, 222, 0.8);
`;
