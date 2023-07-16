import D100 from "./D100";
import D36 from "./D36";
import D20 from "./D20";
import D12 from "./D12";
import D10 from "./D10";
import D8 from './D8';
import D6 from "./D6";
import D4 from './D4';

const DiceRolls = () => {
  return (
    <>
    <D4 />
    <D6 />
    <D8 />
    <D10 />
    <D12 />
    <D20 />
    <D36 />
    <D100 /> 
    </>
  )
};

export default DiceRolls;