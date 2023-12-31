import React, { useState } from 'react';

const D20 = () => {
  const [rollResult, setRollResult] = useState('');

  const D20Roll = () => {
    const result = Math.ceil(Math.random() * 20);
    setRollResult(result);
  };

  return (
    <div>
      <form>
        <button type="button" className="button-dice" onClick={D20Roll}>
          D20
        </button>
      </form>
      <span className="result">{rollResult && <p>{rollResult}</p>}</span>
    </div>
  );
};

export default D20;
