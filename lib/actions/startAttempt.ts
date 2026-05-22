export const attemptRequest = async function () {
  try {
    const response = await fetch("/api/attempt/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quizId: 1 }),
    });

    if (!response.ok) {
      console.error("Failed to start attempt");
      throw new Error("Failed to start attempt");
    }

    const data = await response.json();

    console.log(data);
    console.log(data.questions);
    console.log(data.questions[0].options);
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error:", error);
  }
};
