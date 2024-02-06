import { atom } from "recoil";

interface ChatLog {
  id?: number;
  type: string; // 어떤 챗봇인지
  sender: string;
  content: string;
}

export const chatLogState = atom({
  key: "chatLogState",
  default: [] as ChatLog[],
});
