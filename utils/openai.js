import axios from "axios";

const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

const prompt = "Translate the following English text to French: '{hello my name is rajeev}'";
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
		console.log(error);
		console.error('Error making OpenAI API request:', error.message);
	}
}

getOpenAIResponse();