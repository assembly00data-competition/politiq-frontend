import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

import RecoilRootProvider from "@lib/recoilRootProvider";
import StyledComponentsRegistry from "@lib/registry";

import BottomNavigation from "@components/BottomNavigation";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PolitIQ",
  description: "프로듀스 국회의ONE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body
        style={{ width: "100dvw", height: "100dvh" }}
        className={noto.className}
      >
        <StyledComponentsRegistry>
          <RecoilRootProvider>
            {children}
            <BottomNavigation />
          </RecoilRootProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
