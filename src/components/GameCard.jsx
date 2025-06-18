import React, { useState } from 'react';
import './GameCard.css';

const GameCard = ({
  cover,
  titolo,
  genere,
  piattaforma,
  annoUscita,
  prezzo,
  voto,
  stato,
  oreGiocate,
  difficolta
}) => {
  const [mostraDettagli, setMostraDettagli] = useState(false);

  const getVoteClass = (voto) => {
    if (voto >= 8) return 'green';
    if (voto >= 5) return 'yellow';
    return 'red';
  };

  const getBadgeClass = (stato) => {
    switch (stato.toLowerCase()) {
      case 'completato':
        return 'completato';
      case 'in corso':
        return 'in-corso';
      case 'wishlist':
        return 'wishlist';
      case 'abbandonato':
        return 'abbandonato';
      default:
        return '';
    }
  };

  

  return (
    <div className="game-card" onClick={() => setMostraDettagli(prev => !prev)}>
      <img src={cover} alt={titolo} />
      <h2>{titolo}</h2>
      <p>Genere: {genere}</p>
      <p>Piattaforma: {piattaforma}</p>
      <p>
        Voto: <span className={`vote ${getVoteClass(voto)}`}>{voto}</span>
      </p>
      <p>
        Stato: <span className={`badge ${getBadgeClass(stato)}`}>{stato}</span>
      </p>

      {/* Dettagli extra visibili solo se mostraDettagli è true */}
      {mostraDettagli && (
        <div className="dettagli-extra">
          <p>Anno di uscita: {annoUscita}</p>
          <p>Prezzo: {prezzo}</p>
          <p>Ore giocate: {oreGiocate}</p>
          <p>Difficoltà: {difficolta}</p>
        </div>
      )}
    </div>


  );
};

export default GameCard;
