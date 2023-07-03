import characterData from '../../components/CharacterList/got.json'; 

export const searchCharacters = (searchTerm) => {
  const filteredCharacters = characterData.got.filter(character =>
    character.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredCharacters;
  
};
