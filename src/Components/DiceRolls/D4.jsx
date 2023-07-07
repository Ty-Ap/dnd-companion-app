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
        <button type="button" onClick={D4Roll}>
          D4
        </button>
      </form>
      {rollResult && <p>D4 Roll Result: {rollResult}</p>}
    </div>
  );
};

export default D4;