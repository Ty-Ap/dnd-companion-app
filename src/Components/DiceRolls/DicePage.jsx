import D100 from "./D100";
import D36 from "./D36";
import D20 from "./D20";
import D12 from "./D12";
import D10 from "./D10";
import D8 from './D8';
import D6 from "./D6";
import D4 from './D4';
import '../Styles/Die.scss';

const DiceRolls = () => {
  return (
    <div className="diceParent">
    <D4 className="dice"/>
    <D6 className="dice"/>
    <D8 className="dice"/>
    <D10 className="dice"/>
    <D12 className="dice"/>
    <D20 className="dice"/>
    <D36 className="dice"/>
    <D100 className="dice" /> 
    </div>
  )
};

export default DiceRolls;