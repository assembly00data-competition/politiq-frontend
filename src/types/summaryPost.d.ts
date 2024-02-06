interface SummaryPost {
  title: string; // 회의록 이름
  content: string;
  pdfUrl: string;
}

interface SummaryInfo {
  date: string;
  type: string;
  summary: string;
}

interface MettingRecordInfo {
  CONFER_NUM: string;
  TITLE: string;
  CLASS_NAME: string;
  DAE_NUM: string;
  CONF_DATE: string;
  SUB_NAME: string;
  VOD_LINK_URL: string;
  CONF_LINK_URL: string;
  PDF_LINK_URL: string;
}
