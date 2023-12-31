import React, { useState } from 'react';

const D36 = () => {
  const [rollResult, setRollResult] = useState('');

  const D36Roll = () => {
    const result = Math.ceil(Math.random() * 36);
    setRollResult(result);
  };

  return (
    <div>
      <form>
        <button type="button" className="button-dice" onClick={D36Roll}>
          D36
        </button>
      </form>
      <span className="result">{rollResult && <p>{rollResult}</p>}</span>
    </div>
  );
};

export default D36;