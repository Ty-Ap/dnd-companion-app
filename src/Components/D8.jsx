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
        <button type="button" onClick={D8Roll}>
          D8
        </button>
      </form>
      {rollResult && <p>D8 Roll Result: {rollResult}</p>}
    </div>
  );
};

export default D8;