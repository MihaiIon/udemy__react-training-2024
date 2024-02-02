import { useState } from 'react';
import { createPlayer, createTurnHistory, findWinningPlayer, isGameDraw } from '../utils';

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function useGame() {
  const [gameState, setGameState] = useState({ gameBoard: intialGameBoard, isGameOver: false, winner: null });
  const [player1, setPlayer1] = useState(createPlayer({ name: "Player 1", symbol: "X" }));
  const [player2, setPlayer2] = useState(createPlayer({ name: "Player 2", symbol: "O" }));
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [turnsHistory, setTurnsHistory] = useState([]);

  const currentPlayer = currentPlayerIndex === 0 ? player1 : player2;

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

  return {
    currentPlayerIndex,
    gameState,
    player1,
    player2,
    turnsHistory,
    handlePlayerAction,
    handleRestart,
    setPlayer1,
    setPlayer2
  };
}
