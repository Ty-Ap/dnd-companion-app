import React, { useState } from 'react';

const D12 = () => {
  const [rollResult, setRollResult] = useState('');

  const D12Roll = () => {
    const result = Math.ceil(Math.random() * 12);
    setRollResult(result);
  };

  return (
    <div>
      <form>
        <button type="button" className="button-dice" onClick={D12Roll}>
          D12
        </button>
      </form>
      {rollResult && <p>{rollResult}</p>}
    </div>
  );
};

export default D12;