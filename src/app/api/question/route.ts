const questionToChatbot = async (question: string, type: string) => {
  const server_url =
    type === "recommend"
      ? "http://165.246.121.115:5000"
      : "http://34.146.74.81:57481";

  const response = await fetch(server_url, {
    method: "POST",
    body: JSON.stringify({
      question,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const jsonData = await response.json();
  return jsonData;
};

export async function POST(request: Request) {
  try {
    const { content, type } = await request.json();
    const response = await questionToChatbot(content, type);

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
