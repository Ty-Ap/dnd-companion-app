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
        <button type="button" onClick={D20Roll}>
          D20
        </button>
      </form>
      {rollResult && <p>D20 Roll Result: {rollResult}</p>}
    </div>
  );
};

export default D20;