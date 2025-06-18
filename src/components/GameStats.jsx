import React from 'react';

const GameStats = ({ giochi }) => {
  // Filtra giochi completati o in corso per ore totali giocate
  const giochiConOre = giochi.filter(game =>
    ['completato', 'in-corso'].includes(game.stato.toLowerCase())
  );
  const oreTotali = giochiConOre.reduce((sum, game) => sum + (game.oreGiocate || 0), 0);

  // Conta giochi per stato
  const giochiPerStato = giochi.reduce((acc, game) => {
    const stato = game.stato.toLowerCase();
    acc[stato] = (acc[stato] || 0) + 1;
    return acc;
  }, {});

  // Calcola voto medio (solo giochi con voto)
  const giochiConVoto = giochi.filter(game => typeof game.voto === 'number');
  const votoMedio = giochiConVoto.length > 0
    ? (giochiConVoto.reduce((sum, game) => sum + game.voto, 0) / giochiConVoto.length).toFixed(2)
    : '-';

  // Piattaforma con più giochi
  const piattaformeCount = giochi.reduce((acc, game) => {
    const piattaforma = game.piattaforma.toLowerCase();
    acc[piattaforma] = (acc[piattaforma] || 0) + 1;
    return acc;
  }, {});
  const piattaformaTop = Object.entries(piattaformeCount).reduce((max, curr) => curr[1] > max[1] ? curr : max, ['', 0])[0];

  return (
    <div className="game-stats" style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '300px' }}>
      <h3>Statistiche Gioco</h3>
      <p><strong>Ore totali giocate:</strong> {oreTotali}</p>
      <p><strong>Giochi per stato:</strong></p>
      <ul>
        {Object.entries(giochiPerStato).map(([stato, count]) => (
          <li key={stato}>{stato.charAt(0).toUpperCase() + stato.slice(1)}: {count}</li>
        ))}
      </ul>
      <p><strong>Voto medio:</strong> {votoMedio}</p>
      <p><strong>Piattaforma più usata:</strong> {piattaformaTop.charAt(0).toUpperCase() + piattaformaTop.slice(1)}</p>
    </div>
  );
};

export default GameStats;
