import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);
export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow all instructions in README.md",
      },
    });
    return;
  }
  const sentence = req.body.sentence || "";
  if (sentence.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter what you would like to say",
      },
    });
    return;
  }
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: sentence,
      temperature: 0,
      max_tokens: 600,
    });
    let completionResult = completion.data.choices[0].text;
    if (completionResult === "" || completionResult.length < 2) {
      completionResult = "I do not have enough data to answer this prompt";
    }
    res.status(200).json({ result: completionResult });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}
