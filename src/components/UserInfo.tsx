import { useState } from "react";

import styled from "styled-components";

import { FaCircleUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlineBookmarkAdded } from "react-icons/md";

const Icons = [
  { icon: FaRegHeart, description: "내가 누른 좋아요" },
  { icon: BiCommentDetail, description: "댓글 확인하기" },
  { icon: MdOutlineBookmarkAdded, description: "스크랩 저장소" },
];

export default function UserInfo() {
  const [isLogin, _] = useState<boolean>(false);

  return (
    <Container>
      <Overview>
        <FaCircleUser size={50} />
        <div style={{ justifyContent: "space-between" }}>
          <p style={{ fontSize: "1.4rem" }}>{"국민 프로듀서"}</p>
          {/* 로그인 기능 추가 후, 해당 유저의 이름, 이곳에 추가할 것 */}
          <p style={{ fontSize: "1.2rem", fontWeight: 700, color: "#EC93AB" }}>
            {isLogin ? <></> : "로그인"}
          </p>
        </div>
      </Overview>
      <UserMenu>
        {Icons.map((Icon, index) => (
          <p key={index} style={{ flexDirection: "row", fontSize: 14, gap: 3 }}>
            {Icon.description}
            <Icon.icon size={18} />
          </p>
        ))}
      </UserMenu>
    </Container>
  );
}

const Container = styled.div`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 0 5%;
`;

const Overview = styled.div`
  gap: 10px;
  flex-direction: row;
`;

const UserMenu = styled.div`
  gap: 5px;
  align-items: flex-end;
`;
