import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameOverOverlay from "./components/GameOverOverlay";
import Log from "./components/Log";

import { createPlayer, createTurnHistory, findWinningPlayer, isGameDraw } from "./utils";

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameState, setGameState] = useState({ gameBoard: intialGameBoard, isGameOver: false, winner: null });

  // Setup players
  const [player1, setPlayer1] = useState(createPlayer({ name: "Player 1", symbol: "X" }));
  const [player2, setPlayer2] = useState(createPlayer({ name: "Player 2", symbol: "O" }));

  // Get current player
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const currentPlayer = currentPlayerIndex === 0 ? player1 : player2;

  // Get game board
  const { gameBoard } = gameState;

  // Manage turns history
  const [turnsHistory, setTurnsHistory] = useState([]);
  const handlePlayerAction = ({ rowIndex, colIndex, gameBoard }) => {
    setGameState({ ...gameState, gameBoard });
    updateTurnsHistory({ rowIndex, colIndex });

    const winningPlayer = findWinningPlayer({ gameBoard, player1, player2 });
    if (winningPlayer) return setGameState({ isGameOver: true, winner: winningPlayer, gameBoard });

    if (isGameDraw(gameBoard)) return setGameState({ isGameOver: true, winner: null, gameBoard });

    setCurrentPlayerIndex((currentPlayerIndex + 1) % 2);
  }

  const updateTurnsHistory = ({ rowIndex, colIndex }) => {
    const newTurnsHistory = [
      ...turnsHistory,
      createTurnHistory({ row: rowIndex, col: colIndex, player: currentPlayer })
    ];

    setTurnsHistory(newTurnsHistory);
  }

  const handleRestart = () => {
    setGameState({ isGameOver: false, winner: null, gameBoard: intialGameBoard });
    setTurnsHistory([]);
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
        {gameState.isGameOver && (
          <GameOverOverlay
            winner={gameState.winner}
            onRestart={handleRestart}
          />
        )}
        <GameBoard
          gameState={gameState}
          currentPlayer={currentPlayerIndex === 0 ? player1 : player2}
          onPlayerAction={handlePlayerAction}
        />
      </div>
      <Log turnsHistory={turnsHistory} />
    </main>
  )
}

export default App
