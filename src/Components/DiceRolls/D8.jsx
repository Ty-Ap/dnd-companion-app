import React, { useState } from 'react';

const D8 = () => {
  const [rollResult, setRollResult] = useState('');

  const D8Roll = () => {
    const result = Math.ceil(Math.random() * 8);
    setRollResult(result);
  };

  return (
    <div>
      <form>
        <button type="button" className="button-dice" onClick={D8Roll}>
          D8
        </button>
      </form>
      <span className="result">{rollResult && <p>{rollResult}</p>}</span>
    </div>
  );
};

export default D8;