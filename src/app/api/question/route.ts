const questionToChatbot = async (question: string, type: string) => {
  const server_url =
    type === "recommend"
      ? "http://165.246.121.115:5000"
      : "http://35.243.117.147:50716";

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

const questionToChatbotWithEffect = async (effect: string) => {
  const server_url = "http://35.243.117.147:50716";

  const response = await fetch(server_url, {
    method: "POST",
    body: JSON.stringify({
      question: "",
      effect,
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
    const { content, type, effect } = await request.json();

    if (effect) {
      const response = await questionToChatbotWithEffect(effect);

      return new Response(JSON.stringify(response), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      const response = await questionToChatbot(content, type);

      return new Response(JSON.stringify(response), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
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
