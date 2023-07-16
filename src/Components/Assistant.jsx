import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const Assistant = () => {
  const [chatCompletions, setChatCompletions] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a Dungeons and Dragons assistant. answer prompts following the format of \n \n Answer: \n Details: \n ;' },
          { role: 'user', content: userInput },
        ],
        temperature: 0.75,
        max_tokens: 120,
        top_p: 0.55,
        frequency_penalty: 2,
        presence_penalty: 0.5,
        stop: [';'],
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

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // useEffect(() => {
  //   const setupOpenAI = async () => {
  //     try {
  //       const response = await openai.createChatCompletion({
  //         model: 'gpt-3.5-turbo',
  //         messages: [
  //           { role: 'system', content: 'You are a D&D assistant. Do not give examples in responses unless asked by a user to give examples.' },
  //         ],
  //         temperature: 0.75,
  //         max_tokens: 106,
  //         top_p: 0.55,
  //         frequency_penalty: 2,
  //         presence_penalty: 0.5,
  //         stop: ['2.'],
  //       });

  //       console.log(response); // Log the response object for debugging

  //       if (response.data.choices && response.data.choices.length > 0) {
  //         const newCompletion = response.data.choices[0].message.content;
  //         setChatCompletions((prevCompletions) => [...prevCompletions, newCompletion]);
  //       }
  //     } catch (error) {
  //       console.error('Failed to initialize OpenAI:', error);
  //       // Handle the error, e.g., display an error message to the user
  //     }

  //     setLoading(false);
  //   };

  //   setupOpenAI();
  // }, []);

  return (
    <div>
      <h1>Chat GPT Player Assistant</h1>
      <p>enter a topic, ask a question etc below. <br/> 
      NOTE: this functionality may become locked behind role based access control (RBAC) in a future update. Reason being, openAi API use is not free, and I can only keep the functionality public for as long as I have the means to pay usage fees. 
      </p>
      <div>
        {chatCompletions.map((completion, index) => (
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
