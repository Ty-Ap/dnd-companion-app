import D100 from "./Components/DiceRolls/D100";
import D36 from "./Components/DiceRolls/D36";
import D20 from "./Components/DiceRolls/D20";
import D12 from "./Components/DiceRolls/D12";
import D10 from "./Components/DiceRolls/D10";
import D8 from './Components/DiceRolls/D8';
import D6 from "./Components/DiceRolls/D6";
import D4 from './Components/DiceRolls/D4';
import CharacterSheet from "./Components/CharacterSheet";


function App() {
  return (
    <>
      <D100 />
      <D36 />
      <D20 />
      <D12 />
      <D10 />
      <D8 />
      <D6 />
      <D4 />

    <CharacterSheet />
    </>
  );
}

export default App;
