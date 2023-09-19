import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import '../../src/Components/Styles/Sheet.scss';

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
    const doc = new jsPDF('landscape');
    
    // Apply CSS styles to the PDF
    doc.setFont('Roboto'); // Set the font-family to Roboto
    doc.setFontSize(14); // Set the font size
    doc.setTextColor(40, 165, 134); // Set the text color to #28a586
    
    doc.setFillColor(0, 224, 138); // Set the background color to #00E88A
    
    // Define a function to create a styled box
    const createStyledBox = (x, y, width, height) => {
      doc.setFillColor(0, 224, 138); // Set the background color to #00E88A
      doc.rect(x, y, width, height, 'F'); // Draw a filled rectangle
      doc.setTextColor(0);
    };
  
    // Create a styled header box
    createStyledBox(0, 0, 297, 30);
    doc.setFontSize(30);
    doc.text('D&D Character Sheet', 150, 20, { align: 'center' });
  
    // Create styled input fields for character information
    const fieldWidth = 60;
    const fieldHeight = 10;
    const xOffset = 20;
    const yOffset = 40;
    const spacing = 10;
  
    // Create fields horizontally
    const fields = [
      { label: 'Name:', x: xOffset, y: yOffset },
      { label: 'Class:', x: xOffset + fieldWidth + spacing, y: yOffset },
      { label: 'Level:', x: xOffset + 2 * (fieldWidth + spacing), y: yOffset },
      { label: 'Race:', x: xOffset + 3 * (fieldWidth + spacing), y: yOffset },
      { label: 'Alignment:', x: xOffset + 4 * (fieldWidth + spacing), y: yOffset }
    ];
  
    fields.forEach((field) => {
      createStyledBox(field.x, field.y, fieldWidth, fieldHeight);
      doc.text(field.label, field.x + 5, field.y + 7); // Adjust text position
      doc.rect(field.x + fieldWidth + 5, field.y + 2, 50, fieldHeight - 4); // Input box for each field
    });
  
    // Save the PDF
    doc.save('character_sheet.pdf');
  };
  
  

  return (
    <div className="character-sheet">
      <h1>D&D Character Sheet</h1>
      {/* got annoyed trying to center with scss so used whitespace preserve. will fix later */}
      <h3>Save Character saves Locally. To avoid conflicting data from multiple characters/sessions I recommend exporting to PDF.
      </h3>
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
        {/* need to add fields for feats/inventory/known spells etc */}
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
