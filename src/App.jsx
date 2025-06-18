import { useState } from 'react'
import './App.css'
import { getAllGames } from './data/mockData.js';
import  Header  from './components/header.jsx';
import GameCard from './components/GameCard.jsx';
function App() {
  const giochi = getAllGames();
  const gamertag = "Alexandrus Bell"

  return (
    <>
    <Header gamerTag={gamertag} totalGames={giochi.length} />

      <div className="games-container">
        {giochi.map((game) => (
          <GameCard
            key={game.id}
            cover={game.cover || game.coverImageUrl} // gestisce entrambi i nomi
            titolo={game.titolo}
            genere={game.genere}
            piattaforma={game.piattaforma}
            annoUscita={game.annoUscita}
            prezzo={game.prezzo}
            voto={game.voto}
            stato={game.stato}
            oreGiocate={game.oreGiocate}
            difficolta={game.difficolta}
          />
        ))}
      </div>
    </>
  );
}

export default App
