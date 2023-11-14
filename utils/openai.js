const axios = require('axios');

const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions'; // Adjust the API endpoint based on OpenAI's documentation

const prompt = "Translate the following English text to French: '{}'";
const maxTokens = 60;

async function getOpenAIResponse() {
  try {
    const response = await axios.post(
      apiUrl,
      {
        prompt: prompt,
        max_tokens: maxTokens
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );

    const translatedText = response.data.choices[0].text.trim();
    console.log(translatedText);
    // You can now send this translated text to your frontend or perform other actions with it.

  } catch (error) {
    console.error('Error making OpenAI API request:', error.message);
  }
}

getOpenAIResponse();
