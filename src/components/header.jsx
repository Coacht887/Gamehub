/* - Titolo accattivante: "🎮 GameHub" + vostro gamertag
- Colori dark theme: sfondo scuro (#1a1a1a), testi chiari, accenti neon
- Contatore totale giochi nella collezione */

import React from "react";
import './Header.css';
function Header ({gamerTag, totalGames})  {
    return (
        <header className="header-style">
        <div className="title-style">

            <h1>🎮 Crazy Gamer <span className="gamerTag">{gamerTag}</span></h1>

        </div>
            <div className="counter-style">
                <p className="game-count">Totale giochi: {totalGames}</p>
            </div>  
        </header>
    );
};


export default Header;