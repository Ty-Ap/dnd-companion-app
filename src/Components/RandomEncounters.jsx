import React, { useEffect, useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const RandomEncounters = () => {
  const [chatCompletions, setChatCompletions] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const setupOpenAI = async () => {
      try {
        const response = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              "role": "system",
              "content": "You are a DM. Provide concise, scalable encounters following the format of\n\nEncounter:\nDescription:\nObjective:\n;"
            },
          ],
          temperature: 2,
          max_tokens: 165,
          top_p: 0.85,
          frequency_penalty: 2,
          presence_penalty: 1,
          stop: [";"],
        });

        console.log(response); // Log the response object for debugging

        if (response.data.choices && response.data.choices.length > 0) {
          const newCompletion = response.data.choices[0].message.content;
          setChatCompletions((prevCompletions) => [...prevCompletions, newCompletion]);
        }
      } catch (error) {
        console.error('Failed to initialize OpenAI:', error);
        // Handle the error, e.g., display an error message to the user
      }

      setLoading(false);
    };

    setupOpenAI();
  }, []);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            "role": "system",
            "content": "You are a DM. Provide concise, scalable encounters following the format of\n\nEncounter:\nDescription:\nObjective:\n;"
          },
        ],
        temperature: 2,
        max_tokens: 165,
        top_p: 0.85,
        frequency_penalty: 2,
        presence_penalty: 1,
        stop: [";"],
      });


      console.log(response); // Log the response object for debugging

      if (response.data.choices && response.data.choices.length > 0) {
        const newCompletion = response.data.choices[0].message.content;
        setChatCompletions((prevCompletions) => [...prevCompletions, newCompletion]);
      }
    } catch (error) {
      console.error('OpenAI API request failed:', error);
      // Handle the error, e.g., display an error message to the user
    }

    setUserInput('');
    setLoading(false);
  };

  return (
    <div>
      <div>
        {chatCompletions.slice(1).map((completion, index) => (
          <p key={index}>{completion}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleInputChange} />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default RandomEncounters;
