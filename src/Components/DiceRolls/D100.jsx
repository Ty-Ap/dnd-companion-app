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
        <button type="button" onClick={D100Roll}>
          D100
        </button>
      </form>
      {rollResult && <p>D100 Roll Result: {rollResult}</p>}
    </div>
  );
};

export default D100;