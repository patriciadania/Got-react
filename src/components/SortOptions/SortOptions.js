import React from 'react';
import './SortOptions.css'; 

const SortOptions = ({ handleSort }) => {
  return (
    <div className="sort-options">
      <label htmlFor="sort">Ordenar por:</label>
      <select id="sort" onChange={handleSort} className="sort-select">
        <option value="">Selecione</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>
    </div>
  );
};

export default SortOptions;

