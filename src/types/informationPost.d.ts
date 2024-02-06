interface InformationPost {
  title: string; // 국회의원 이름
  content: AssemblyInfo;
}

interface AssemblyInfo {
  HG_NM: string; // 이름
  POLY_NM: string; // 정당명
  ORIG_NM: string; // 선거구
  UNITS: string; // 당선 대수
  CMITS: string; // 소속 위원회 목록
  TEL_NO: string; // 전화번호
  ASSEM_ADDR: string; // 사무실 호실
  E_MAIL: string; // 이메일
  HOMEPAGE: string; // 홈페이지
}
