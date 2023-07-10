import React, { useState } from 'react';
import axios from 'axios';

const Spellbook = () => {
  const [spellSearchQuery, setSpellSearchQuery] = useState('');
  const [selectedSpell, setSelectedSpell] = useState(null);

  const handleSearchChange = (e) => {
    setSpellSearchQuery(e.target.value);
  };

const handleSearch = async () => {
  try {
    const formattedQuery = spellSearchQuery.toLowerCase().replace(/\s/g, '-');
    const response = await axios.get(
      `https://www.dnd5eapi.co/api/spells/${formattedQuery}`
    );
    const spellData = response.data;
    setSelectedSpell(spellData);
  } catch (error) {
    console.error('Error fetching spell:', error);
    setSelectedSpell(null);
  }
};

const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    handleSearch();
  }
};

  return (
    <div>
      <h1>Spellbook</h1>
      <input
        type="text"
        value={spellSearchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
        placeholder="Search spells..."
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>

      {selectedSpell ? (
        <div>
          <h2>{selectedSpell.name}</h2>
          <p>Level: {selectedSpell.level}</p>
          <p>School: {selectedSpell.school.name}</p>
          {/* Display other spell details */}
        </div>
      ) : (
        <p>No matching spell found.</p>
      )}
    </div>
  );
};

export default Spellbook;
