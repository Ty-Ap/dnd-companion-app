import React, { useState } from 'react';

const D6 = () => {
  const [rollResult, setRollResult] = useState('');

  const D6Roll = () => {
    const result = Math.ceil(Math.random() * 6);
    setRollResult(result);
  };

  return (
    <div>
      <form>
        <button type="button" className="button-dice" onClick={D6Roll}>
          D6
        </button>
      </form>
      {rollResult && <p>{rollResult}</p>}
    </div>
  );
};

export default D6;