"use client";

import { RecoilRoot } from "recoil";
import { recoilPersist } from "recoil-persist";

// 클라이언트 사이드에서만 localStorage를 사용
const isClient = typeof window !== "undefined";

const { persistAtom } = recoilPersist({
  key: "recoil-persist", // 로컬 스토리지에 저장될 키
  storage: isClient ? localStorage : undefined, // 클라이언트 사이드에서만 localStorage 사용
});

export default function RecoilRootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
