import { useState } from 'react';

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ currentPlayer, gameState, onPlayerAction }) {
  const [gameBoard, setGameBoard] = useState(intialGameBoard);

  const updateGameBoard = ({ rowIndex, colIndex, gameBoard }) => {
    if (gameState.isGameOver) return;
    if (gameBoard[rowIndex][colIndex] !== null) return;

    const newGameBoard = gameBoard.map(row => [...row]);
    newGameBoard[rowIndex][colIndex] = currentPlayer.symbol;
    setGameBoard(newGameBoard);

    onPlayerAction({ rowIndex, colIndex, gameBoard: newGameBoard });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={`row-${rowIndex}`}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={`cell-${rowIndex}-${colIndex}`}>
                <button onClick={() => updateGameBoard({ rowIndex, colIndex, gameBoard })}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}