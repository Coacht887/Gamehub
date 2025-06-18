import React from 'react';
import GameCard from './GameCard';
import './GameList.css';

const GameList = ({ giochi }) => {
  return (
    <div className="game-list">
      {giochi.map((gioco) => (
        <GameCard key={gioco.id} {...gioco} />
      ))}
    </div>
  );
};

export default GameList;