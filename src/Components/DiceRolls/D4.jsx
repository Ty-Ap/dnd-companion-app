import React, { useState } from 'react';


const D4 = () => {
  const [rollResult, setRollResult] = useState('');

  const D4Roll = () => {
    const result = Math.ceil(Math.random() * 4);
    setRollResult(result);
  };

  return (
    <div>
      <form>
        <button type="button" className="button-dice" onClick={D4Roll}>
          D4
        </button>
      </form>
      <span className="result">{rollResult && <p>{rollResult}</p>}</span>
    </div>
  );
};

export default D4;