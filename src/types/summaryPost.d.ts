interface SummaryPost {
  title: string; // 회의록 이름
  content: SummaryInfo;
}

interface SummaryInfo {
  date: string;
  type: string;
  summary: string;
}
