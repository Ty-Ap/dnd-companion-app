import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';

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

  const handleClear = () => {
    setCharacterData({
      name: '',
      class: '',
      level: '',
      race: '',
      alignment: '',
    });
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
  
    doc.text('D&D Character Sheet', 10, 10);
    doc.text(`Name: ${characterData.name}`, 10, 20);
    doc.text(`Class: ${characterData.class}`, 10, 30);
    doc.text(`Level: ${characterData.level}`, 10, 40);
    doc.text(`Race: ${characterData.race}`, 10, 50);
    doc.text(`Alignment: ${characterData.alignment}`, 10, 60);
  
    doc.save('character_sheet.pdf');
  };

  return (
    <div className="character-sheet">
      <h1>D&D Character Sheet</h1>
      {/* got annoyed trying to center with scss so used whitespace preserve. will fix later */}
      <text>                                                                                      Save Character saves Locally. To avoid conflicting data from multiple characters/sessions I recommend exporting to PDF.
      </text>
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
        {/* could also use reset button type below instead of using handleClear function, but I prefer this for clarity. */}
        {/* moved buttons outside of form for styling */}
      </form>
      <div className="button-container">
      <button type="submit">Save Character</button>
      <button type="button" onClick={handleClear}>Clear</button>
      <button type="button" onClick={exportToPDF}>Export to PDF</button>
    </div>
    </div>
  );
};

export default CharacterSheet;
