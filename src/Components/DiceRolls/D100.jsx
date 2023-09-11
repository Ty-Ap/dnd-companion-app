import React, { useState } from 'react';

const D100 = () => {
  const [rollResult, setRollResult] = useState('');

  const D100Roll = () => {
    const result = Math.ceil(Math.random() * 100);
    setRollResult(result);
  };

  return (
    <div>
      <form>
        <button type="button" className="button-dice" onClick={D100Roll}>
          D100
        </button>
      </form>
      {rollResult && <p>{rollResult}</p>}
    </div>
  );
};

export default D100;