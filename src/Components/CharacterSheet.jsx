import React, { useState, useEffect } from 'react';

const CharacterSheet = () => {
  const [characterData, setCharacterData] = useState({
    name: '',
    class: '',
    level: '',
    race: '',
    alignment: ''
  });

  useEffect(() => {
    // Retrieve character data from local storage on component mount
    const storedCharacterData = localStorage.getItem('characterData');
    if (storedCharacterData) {
      setCharacterData(JSON.parse(storedCharacterData));
    }
  }, []);

  const handleChange = (e) => {
    setCharacterData({
      ...characterData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store character data in local storage
    localStorage.setItem('characterData', JSON.stringify(characterData));
  };

  return (
    <div>
      <h1>D&D Character Sheet</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={characterData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Class:
          <select
            name="class"
            value={characterData.class}
            onChange={handleChange}
          >
            <option value="">Select Class</option>
            <option value="Barbarian">Barbarian</option>
            <option value="Bard">Bard</option>
            <option value="Cleric">Cleric</option>
            <option value="Warlock">Warlock</option>
            <option value="Rogue">Rogue</option>
            <option value="Ranger">Ranger</option>
            <option value="Druid">Druid</option>
            <option value="Fighter">Fighter</option>
            <option value="Paladin">Paladin</option>
            <option value="Sorcerer">Sorcerer</option>
            <option value="Wizard">Wizard</option>
            <option value="Artificer">Artificer</option>
            <option value="Monk">Monk</option>
          </select>
        </label>
        <label>
          Level:
          <input
            type="number"
            name="level"
            value={characterData.level}
            onChange={handleChange}
          />
        </label>
        <label>
          Race:
          <select
            name="race"
            value={characterData.race}
            onChange={handleChange}
          >
            <option value="">Select Race</option>
            <option value="Human">Human</option>
            <option value="Elf">Elf</option>
            <option value="Half-Elf">Half-Elf</option>
            <option value="Dwarf">Dwarf</option>
            <option value="Dragonborn">Dragonborn</option>
            <option value="Gnome">Gnome</option>
            <option value="Halfling">Halfling</option>
            <option value="Orc">Orc</option>
            <option value="Half-Orc">Half-Orc</option>
            <option value="Tiefling">Tiefling</option>
            <option value="Human">Human</option>
            <option value="Human">Human</option>
            <option value="Human">Human</option>
            <option value="Human">Human</option>
            <option value="Human">Human</option>
            {/* Add more race options */}
          </select>
        </label>
        <label>
          Alignment:
          <select
            name="alignment"
            value={characterData.alignment}
            onChange={handleChange}
          >
            <option value="">Select Alignment</option>
            <option value="Neutral Good">Neutral Good</option>
            <option value="True Neutral">True Neutral</option>
            <option value="Neutral Evil">Neutral Evil</option>
            <option value="Lawful Good">Lawful Good</option>
            <option value="Lawful Neutral">Lawful Neutral</option>
            <option value="Lawful Evil">Lawful Evil</option>
            <option value="Chaotic Good">Chaotic Good</option>
            <option value="Chaotic Neutral">Chaotic Neutral</option>
            <option value="Chaotic Evil">Chaotic Evil</option>
          </select>
        </label>
        <button type="submit">Save Character</button>
      </form>
    </div>
  );
};

export default CharacterSheet;
