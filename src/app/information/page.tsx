"use client";

import BoardContent from "@components/board/BoardContent";
import BoardHeader from "@components/board/BoardHeader";
import BoardSearch from "@components/board/BoardSearch";
import { useEffect, useState } from "react";
import styled from "styled-components";

// const boardContents = [
//   {
//     title: "대법관의 임기",
//     content:
//       "대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 선거에 있어서 최고득표자가 2인 이상인 때에는 국회의 재적의원 과반수가 출석한 공개회의에서 다수표를 얻은 자를 당선자로 한다. 국회는 의장 1인과 부의장 2인을 선출한다. 법관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니하며, 징계처분에 의하지 아니하고는 정직·감봉 기타 불리한 처분을 받지 아니한다.",
//   },
//   {
//     title: "행정기관",
//     content:
//       "제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다. 대통령이 궐위되거나 사고로 인하여 직무를 수행할 수 없을 때에는 국무총리, 법률이 정한 국무위원의 순서로 그 권한을 대행한다. 모든 국민은 소급입법에 의하여 참정권의 제한을 받거나 재산권을 박탈당하지 아니한다. 공무원의 신분과 정치적 중립성은 법률이 정하는 바에 의하여 보장된다.",
//   },
//   {
//     title: "국회의원의 선거구",
//     content:
//       "국회의원의 선거구와 비례대표제 기타 선거에 관한 사항은 법률로 정한다. 국무위원은 국정에 관하여 대통령을 보좌하며, 국무회의의 구성원으로서 국정을 심의한다. 국가안전보장회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 국회의원은 그 지위를 남용하여 국가·공공단체 또는 기업체와의 계약이나 그 처분에 의하여 재산상의 권리·이익 또는 직위를 취득하거나 타인을 위하여 그 취득을 알선할 수 없다.",
//   },
//   {
//     title: "행정각부의 설치",
//     content:
//       "행정각부의 설치·조직과 직무범위는 법률로 정한다. 감사위원은 원장의 제청으로 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다. 국가는 균형있는 국민경제의 성장 및 안정과 적정한 소득의 분배를 유지하고, 시장의 지배와 경제력의 남용을 방지하며, 경제주체간의 조화를 통한 경제의 민주화를 위하여 경제에 관한 규제와 조정을 할 수 있다.",
//   },
//   {
//     title: "국가",
//     content:
//       "국가는 모성의 보호를 위하여 노력하여야 한다. 국회의 정기회는 법률이 정하는 바에 의하여 매년 1회 집회되며, 국회의 임시회는 대통령 또는 국회재적의원 4분의 1 이상의 요구에 의하여 집회된다. 대통령의 임기연장 또는 중임변경을 위한 헌법개정은 그 헌법개정 제안 당시의 대통령에 대하여는 효력이 없다. 국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의 자문에 응하기 위하여 국민경제자문회의를 둘 수 있다.",
//   },
// ];

const getDataFromAPI = async (): Promise<AssemblyInfo[] | undefined> => {
  const baseurl =
    "https://open.assembly.go.kr/portal/openapi/nwvrqwxyaytdsfvhu";
  const key = "a7f9eda667074ea296511bb8436268e3";
  const params = {
    // 필요한 query params를 {} 형태에 담아준다.
    key,
    type: "json",
    pSize: "300",
  };

  const queryString = new URLSearchParams(params).toString(); // url에 쓰기 적합한 querySting으로 return 해준다.
  const reqUrl = `${baseurl}?${queryString}`; // 완성된 요청 url

  try {
    const response = await fetch(reqUrl);
    const jsonData = await response.json();
    return jsonData.nwvrqwxyaytdsfvhu[1].row;
  } catch (error) {
    console.log(error);
  }
};

export default function Infomation() {
  const [boardContents, setBoardContents] = useState<InformationPost[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDataFromAPI();
      setBoardContents(
        response?.map((info) => ({ title: info.HG_NM, content: info }))
      );
    };

    fetchData();
  }, []);

  return (
    <Container>
      <BoardHeader title={"국회의원 정보 게시판"} />
      <BoardSearch />

      <BoardContainer>
        {boardContents &&
          boardContents.map((boardContent, index) => (
            <BoardContent
              key={index}
              id={boardContent.content.ORIG_NM}
              title={boardContent.title + " 국회의원"}
              content={boardContent.content.ORIG_NM}
            />
          ))}
      </BoardContainer>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  gap: 20px;

  justify-content: flex-start;
  align-items: center;

  width: 100%;

  background-color: #ceefee66;

  padding: 0 5%;
  padding-bottom: 20px;

  overflow-y: hidden;
`;

const BoardContainer = styled.div`
  gap: 15px;

  width: 100%;

  overflow: auto;
`;
