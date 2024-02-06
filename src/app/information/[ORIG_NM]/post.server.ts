export async function getPostData(postId: string) {
  // 예시 데이터
  const posts = [
    { id: "1", title: "게시물 1", content: "이것은 첫 번째 게시물입니다." },
    { id: "2", title: "게시물 2", content: "이것은 두 번째 게시물입니다." },
  ];

  // postId에 해당하는 게시물 찾기
  const post = posts.find((post) => post.id === postId);

  // 게시물이 없다면 null 반환
  if (!post) return null;

  // 게시물 데이터 반환
  return post;
}
