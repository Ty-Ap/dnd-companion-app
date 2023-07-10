import React, { useEffect, useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const Assistant = () => {
  const [chatCompletions, setChatCompletions] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const setupOpenAI = async () => {
      const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);

      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a D&D assistant. Do not give examples in responses unless asked by a user to give examples.',
          },
        ],
        temperature: 0.75,
        max_tokens: 106,
        top_p: 0.55,
        frequency_penalty: 2,
        presence_penalty: 0.5,
        stop: ['2.'],
      });

      console.log(response); // Log the response object for debugging

      if (response.data.choices && response.data.choices.length > 0) {
        const newCompletion = response.data.choices[0].message.content;
        setChatCompletions((prevCompletions) => [...prevCompletions, newCompletion]);
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

    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a D&D assistant. Do not give examples in responses unless asked by a user to give examples.' },
        { role: 'user', content: userInput },
      ],
      temperature: 0.75,
      max_tokens: 120,
      top_p: 0.55,
      frequency_penalty: 2,
      presence_penalty: 0.5,
      stop: ['2.'],
    });

    console.log(response); // Log the response object for debugging

    if (response.data.choices && response.data.choices.length > 0) {
      const newCompletion = response.data.choices[0].message.content;
      setChatCompletions((prevCompletions) => [...prevCompletions, newCompletion]);
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

export default Assistant;

