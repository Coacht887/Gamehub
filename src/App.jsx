import { useState } from 'react';
import './App.css';
import { getAllGames } from './data/mockData.js';
import Header from './components/header.jsx';
import GameCard from './components/GameCard.jsx';
import Navigation from './components/Navigation';
import GameStats from './components/GameStats';
import GameFilters from './components/GameFilters';

function App() {
  const giochi = getAllGames();
  const gamertag = "Alexandrus Bell";

  // Stato per tab attivo
  const [activeTab, setActiveTab] = useState('tutti');

  // Stato filtri
  const [filtri, setFiltri] = useState({
    genere: '',
    piattaforma: '',
    votoMinimo: 1,
    soloWishlist: false
  });

  // Filtra giochi in base a tab + filtri
  const giochiFiltrati = giochi.filter((game) => {
    // Filtra per stato/tab
    if (activeTab !== 'tutti' && game.stato.toLowerCase() !== activeTab) {
      return false;
    }

    // Filtra per genere
    if (filtri.genere && game.genere !== filtri.genere) {
      return false;
    }

    // Filtra per piattaforma
    if (filtri.piattaforma && game.piattaforma !== filtri.piattaforma) {
      return false;
    }

    // Filtra per voto minimo
    if (game.voto < filtri.votoMinimo) {
      return false;
    }

    // Filtra per wishlist
    if (filtri.soloWishlist && !game.wishlist) {
      return false;
    }

    return true;
  });

  // Ricava generi e piattaforme unici per il filtro
  const generiUnici = [...new Set(giochi.map(g => g.genere))];
  const piattaformeUniche = [...new Set(giochi.map(g => g.piattaforma))];

  return (
    <>
      <Header gamerTag={gamertag} totalGames={giochi.length} />

      <h1 style={{ textAlign: 'center' }}>La mia libreria giochi</h1>

      {/* Tabs di navigazione */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Filtro */}
      <GameFilters
        generi={generiUnici}
        piattaforme={piattaformeUniche}
        filtri={filtri}
        setFiltri={setFiltri}
      />

      {/* Statistiche */}
      <GameStats giochi={giochi} />

      {/* Lista giochi filtrati */}
      <div className="game-list">
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

