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
        <button type="button" onClick={D36Roll}>
          D36
        </button>
      </form>
      {rollResult && <p>D36 Roll Result: {rollResult}</p>}
    </div>
  );
};

export default D36;