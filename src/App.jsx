import { useGame } from './hooks/useGame';

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameOverOverlay from "./components/GameOverOverlay";
import Log from "./components/Log";

function App() {
  const {
    currentPlayerIndex,
    gameState,
    player1,
    player2,
    turnsHistory,
    handlePlayerAction,
    handleRestart,
    setPlayer1,
    setPlayer2
  } = useGame();

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
