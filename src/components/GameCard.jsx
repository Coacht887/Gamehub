import React from 'react';
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

  // Classe per colorare il voto
  const getVoteClass = (voto) => {
    if (voto >= 8) return 'green';
    if (voto >= 5) return 'yellow';
    return 'red';
  };

  // Classe per assegnare badge stato
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
    <div className="game-card">
      <img src={cover} alt={titolo} />
      <h2>{titolo}</h2>
      <p>Genere: {genere}</p>
      <p>Piattaforma: {piattaforma}</p>
      <p>Anno di uscita: {annoUscita}</p>
      <p>Prezzo: {prezzo}</p>
      <p>
        Voto: <span className={`vote ${getVoteClass(voto)}`}>{voto}</span>
      </p>
      <p>
        Stato: <span className={`badge ${getBadgeClass(stato)}`}>{stato}</span>
      </p>
      <p>Ore giocate: {oreGiocate}</p>
      <p>Difficoltà: {difficolta}</p>
    </div>
  );
};

export default GameCard;
