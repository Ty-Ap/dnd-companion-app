import React, { useState } from 'react';
import axios from 'axios';

const Monsterbook = () => {
  const [monsterSearchQuery, setMonsterSearchQuery] = useState('');
  const [selectedMonster, setSelectedMonster] = useState(null);

  const handleSearchChange = (e) => {
    setMonsterSearchQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const formattedQuery = monsterSearchQuery.toLowerCase().replace(/\s/g, '-');
      const response = await axios.get(
        `https://www.dnd5eapi.co/api/monsters/${formattedQuery}`
      );
      const monsterData = response.data;
      setSelectedMonster(monsterData);
    } catch (error) {
      console.error('Error fetching monster:', error);
      setSelectedMonster(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <h1>Monsterbook</h1>
      <input
        type="text"
        value={monsterSearchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
        placeholder="Search Monsters..."
      />
      <button type="submit" onClick={handleSearch}>Search</button>

      {selectedMonster ? (
        <div>
          <h2>{selectedMonster.name}</h2>
          <p>Size: {selectedMonster.size}</p>
          <p>Type: {selectedMonster.type}</p>
          <p>Alignment: {selectedMonster.alignment}</p>
          <p>Armor Class: {selectedMonster.armor_class[0].value}</p>
          <p>Hit Points: {selectedMonster.hit_points}</p>
          <p>Hit Dice: {selectedMonster.hit_dice}</p>
          <p>Speed:</p>
          <ul>
            {Object.entries(selectedMonster.speed).map(([type, value]) => (
              <li key={type}>
                {type}: {value}
              </li>
            ))}
          </ul>
          <p>Strength: {selectedMonster.strength}</p>
          <p>Dexterity: {selectedMonster.dexterity}</p>
          <p>Constitution: {selectedMonster.constitution}</p>
          <p>Intelligence: {selectedMonster.intelligence}</p>
          <p>Wisdom: {selectedMonster.wisdom}</p>
          <p>Charisma: {selectedMonster.charisma}</p>
        </div>
      ) : (
        <p>No matching monster found.</p>
      )}
    </div>
  );
};

export default Monsterbook;
