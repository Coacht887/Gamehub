import React from 'react';

const GameFilters = ({ generi, piattaforme, filtri, setFiltri }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFiltri(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="game-filters">
      <select name="genere" value={filtri.genere} onChange={handleChange}>
        <option value="">Tutti i generi</option>
        {generi.map(gen => (
          <option key={gen} value={gen}>{gen}</option>
        ))}
      </select>

      <select name="piattaforma" value={filtri.piattaforma} onChange={handleChange}>
        <option value="">Tutte le piattaforme</option>
        {piattaforme.map(p => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>

      <label>
        Voto minimo: {filtri.votoMinimo}
        <input
          type="range"
          name="votoMinimo"
          min="1"
          max="10"
          value={filtri.votoMinimo}
          onChange={handleChange}
        />
      </label>

      <label>
        <input
          type="checkbox"
          name="soloWishlist"
          checked={filtri.soloWishlist}
          onChange={handleChange}
        />
        Solo Wishlist
      </label>
    </div>
  );
};

export default GameFilters;
