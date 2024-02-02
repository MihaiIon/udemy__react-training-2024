import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [playerName1, setPlayerName1] = useState("Player 1");
  const [playerName2, setPlayerName2] = useState("Player 2");
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            symbol="X"
            playerName={playerName1}
            isActive={currentPlayer === 0}
            onPlayerNameChange={newPlayerName => setPlayerName1(newPlayerName)}
          />
          <Player
            symbol="O"
            playerName={playerName2}
            isActive={currentPlayer === 1}
            onPlayerNameChange={newPlayerName => setPlayerName2(newPlayerName)}
          />
        </ol>
        <GameBoard onPlayerAction={handlePlayerAction} />
      </div>
    </main>
  )
}

export default App
