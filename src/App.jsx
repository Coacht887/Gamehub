import { useState } from 'react';
import './App.css';
import { getAllGames } from './data/mockData.js';
import Header from './components/header.jsx';
import GameCard from './components/GameCard.jsx';
import Navigation from './components/Navigation';
import GameStats from './components/GameStats';

function App() {
  const giochi = getAllGames();
  const gamertag = "Alexandrus Bell";

  // Stato per tab attivo
  const [activeTab, setActiveTab] = useState('tutti');

  // Filtro giochi in base al tab
  const giochiFiltrati = giochi.filter((game) => {
    if (activeTab === 'tutti') return true;
    return game.stato.toLowerCase() === activeTab;
  });

  return (
    <>
      <Header gamerTag={gamertag} totalGames={giochi.length} />

      <h1 style={{ textAlign: 'center' }}>La mia libreria giochi</h1>

      {/* Tabs */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <GameStats giochi={giochi} />  {/* <=== */}

      {/* Lista giochi filtrati */}
      <div className="games-container">
        {giochiFiltrati.map((game) => (
          <GameCard
            key={game.id}
            cover={game.cover || game.coverImageUrl}
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

export default App;
