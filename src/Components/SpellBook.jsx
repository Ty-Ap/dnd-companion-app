import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Spellbook = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [allSpells, setAllSpells] = useState([]);
  const [filteredSpells, setFilteredSpells] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await axios.get('https://www.dnd5eapi.co/api/spells');
        const spells = response.data.results;
        setAllSpells(spells);
      } catch (error) {
        console.error('Error fetching spells:', error);
      }
    };

    fetchSpells();
  }, []);

  useEffect(() => {
    const filterSpells = () => {
      const filtered = allSpells.filter((spell) =>
        spell.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSpells(filtered);
    };

    if (searchQuery.trim() === '') {
      setFilteredSpells([]);
    } else {
      filterSpells();
    }
  }, [searchQuery, allSpells]);

  return (
    <div>
      <h1>Spellbook</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search spells..."
      />
      {searchQuery.trim() !== '' ? (
        <ul>
          {filteredSpells.map((spell, index) => (
            <li key={index}>
              <h2>{spell.name}</h2>
              <p>Level: {spell.level}</p>
              <p>School: {spell.school}</p>
              {/* Display other spell details */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Matching spells appear here</p>
      )}
    </div>
  );
};

export default Spellbook;
