import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CharacterList.css';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://www.anapioficeandfire.com/api/characters');
        setCharacters(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="character-list">
      <h2>Lista de Personagens</h2>
      <div className="card-container">
        {characters.map((character, index) => (
          <div key={index} className="card">
            <div className="card-front">
              <h3>{character.name}</h3>
            </div>
            <div className="card-back">
              <p>Cultura: {character.culture}</p>
              <p>Nascido em: {character.born}</p>
              <p>Morreu em: {character.died}</p>
              <p>Títulos: {character.titles.join(', ')}</p>
              <p>Aliases: {character.aliases.join(', ')}</p>
              <p>Pertence a: {character.allegiances.join(', ')}</p>
              <p>Aparições nos livros:</p>
              <ul>
                {character.books.map((book, bookIndex) => (
                  <li key={bookIndex}>
                    <a href={book}>{book}</a>
                  </li>
                ))}
              </ul>
              <p>Aparições nas séries de TV: {character.tvSeries.join(', ')}</p>
              <p>Interpretado por: {character.playedBy.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
