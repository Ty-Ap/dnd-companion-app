import React, { useState } from 'react';

const D10 = () => {
  const [rollResult, setRollResult] = useState('');

  const D10Roll = () => {
    const result = Math.ceil(Math.random() * 10);
    setRollResult(result);
  };

  return (
    <div>
      <form>
        <button type="button" className="button-dice" onClick={D10Roll}>
          D10
        </button>
      </form>
      {rollResult && <p> {rollResult}</p>}
    </div>
  );
};

export default D10;
