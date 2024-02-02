import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

import { createPlayer, createTurnEntry, findWinningPlayer } from "./utils";

function App() {
  const [gameState, setGameState] = useState({ isGameOver: false, winner: null });

  // Setup players
  const [player1, setPlayer1] = useState(createPlayer({ name: "Player 1", symbol: "X" }));
  const [player2, setPlayer2] = useState(createPlayer({ name: "Player 2", symbol: "O" }));

  // Get current player
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const currentPlayer = currentPlayerIndex === 0 ? player1 : player2;

  // Manage turns history
  const [turnsHistory, setTurnsHistory] = useState([]);
  const handlePlayerAction = ({ rowIndex, colIndex, gameBoard }) => {
    updateTurnsHistory({ rowIndex, colIndex });

    // Check if there's a winner
    const winningPlayer = findWinningPlayer({ gameBoard, player1, player2 });
    if (winningPlayer) setGameState({ isGameOver: true, winner: winningPlayer });

    // Go to next player's turn
    setCurrentPlayerIndex((currentPlayerIndex + 1) % 2);
  }

  const updateTurnsHistory = ({ rowIndex, colIndex }) => {
    const newTurnsHistory = [
      ...turnsHistory,
      createTurnEntry({ row: rowIndex, col: colIndex, player: currentPlayer })
    ];

    setTurnsHistory(newTurnsHistory);
  }

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
        <GameBoard
          gameState={gameState}
          currentPlayer={currentPlayerIndex === 0 ? player1 : player2}
          onPlayerAction={handlePlayerAction}
        />
      </div>
    </main>
  )
}

export default App
