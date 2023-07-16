import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import CharacterSheet from "./Components/CharacterSheet";
import Spellbook from "./Components/SearchBars/SpellBook";
import Monsterbook from "./Components/SearchBars/MonsterManual";
import Assistant from "./Components/Assistant";
import Layout from './Components/Layout';
import DiceRolls from './Components/DiceRolls/DicePage';
import Home from './Components/Home';
import RandomEncounters from './Components/RandomEncounters';


function App() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/rolls" element={<DiceRolls/>} />
        <Route path="/character" element={<CharacterSheet/>} />
        <Route path="/spell" element={<Spellbook/>} />
        <Route path="/monster" element={<Monsterbook/>} />
        <Route path="/assistant" element={<Assistant/>} />
        <Route path="/random-encounters" element={ <RandomEncounters /> } />
      </Routes>
    </Router>
  );
}

export default App;
