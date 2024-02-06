import fs from "fs";
import path from "path";

import styles from "./keyword.module.scss";

import BoardHeader from "@components/board/BoardHeader";
import BoardSearch from "@components/board/BoardSearch";
import Image from "next/image";

export default async function Keyword() {
  const imagesDirectory = path.join(process.cwd(), "public", "wordcloud");

  // Promise를 사용한 파일 목록 읽기
  const readDirAsync = (directory: string): Promise<string[]> => {
    return new Promise((resolve, reject) => {
      fs.readdir(directory, (err, files) => {
        if (err) {
          reject({ error: "디렉터리를 읽어오는데 실패하였습니다.", err });
        } else {
          resolve(files);
        }
      });
    });
  };

  let files: string[] = [];
  try {
    files = await readDirAsync(imagesDirectory);
  } catch (error) {
    console.error(error);
  }

  return (
    <div className={styles.container}>
      <BoardHeader title={"상임위원회 키워드 게시판"} />
      <BoardSearch />
      <div className={styles.contentContainer}>
        {files &&
          files.map((file, index) => (
            <Image
              key={index}
              src={`/wordcloud/${file}`}
              alt={"상임위 이미지"}
              width={180}
              height={180}
              style={{
                borderRadius: 100,
              }}
            />
          ))}
      </div>
    </div>
  );
}
