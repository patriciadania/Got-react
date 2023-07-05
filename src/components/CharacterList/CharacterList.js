import React, { useEffect, useState } from 'react';
import './CharacterList.css';
import characterData from './got.json';
import { searchCharacters } from '../SearchCharacters/SearchCharacter';
import SortOptions from '../SortOptions/SortOptions';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    setCharacters(characterData.got);
  }, []);

  const handleSearch = () => {
    const filteredCharacters = searchCharacters(searchTerm);
    setCharacters(filteredCharacters);
  };

  const handleReset = () => {
    setCharacters(characterData.got);
    setSearchTerm('');
  };

  const handleSort = (event) => {
    const option = event.target.value;

    if (option === 'az') {
      const sortedCharacters = [...characters].sort((a, b) => a.fullName.localeCompare(b.fullName));
      setCharacters(sortedCharacters);
    } else if (option === 'za') {
      const sortedCharacters = [...characters].sort((a, b) => b.fullName.localeCompare(a.fullName));
      setCharacters(sortedCharacters);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="character-list">
      
      <div className="search-container">
        <form className="form">
          <button>
            <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
              <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
          <input
            className="input"
            placeholder="Procurar por nome"
            required
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="reset" type="reset" onClick={handleReset}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </form>
      </div>
      <SortOptions handleSort={handleSort} />
      <div className='texto'>
        <h2>Conheça os Personagens</h2></div>

      {currentPage === null ? (
        <div className="card-container">
          {characters.map((character) => (
            <div key={character.id} className="card">
              <div className="card-inner">
                <div className="card-front">
                  <img src={character.imageUrl} alt={character.fullName} />
                  <h3>{character.fullName}</h3>
                </div>
                <div className="card-back">
                  <p>
                    <strong>Título:</strong> {character.title}
                  </p>
                  <p>
                    <strong>Família: </strong>
                    {character.family}
                  </p>
                  <p>
                    <strong>Nascido em: </strong>
                    {character.born}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={() => setCurrentPage(null)}>Voltar</button>
          <p>Você está na página do personagem com ID: {currentPage}</p>
        </div>
      )}
    </div>
  );
};

export default CharacterList;
