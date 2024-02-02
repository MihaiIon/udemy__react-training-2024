import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

const createPlayer = ({ name, symbol }) => ({ name, symbol });

const createTurnEntry = ({ row, col, playerName, playerSymbol }) => ({
  playerName,
  playerSymbol,
  cell: { row, col },
});

function App() {
  const [player1, setPlayer1] = useState(createPlayer({ name: "Player 1", symbol: "X" }));
  const [player2, setPlayer2] = useState(createPlayer({ name: "Player 2", symbol: "O" }));
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            symbol={player1.symbol}
            playerName={player1.name}
            isActive={currentPlayerIndex === 0}
            onPlayerNameChange={newPlayerName => setPlayer1({ ...player1, name: newPlayerName })}
          />
          <Player
            symbol={player2.symbol}
            playerName={player2.name}
            isActive={currentPlayerIndex === 1}
            onPlayerNameChange={newPlayerName => setPlayer2({ ...player2, name: newPlayerName })}
          />
        </ol>
        <GameBoard />
      </div>
    </main>
  )
}

export default App
