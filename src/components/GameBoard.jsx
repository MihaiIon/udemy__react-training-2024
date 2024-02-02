import { useState } from 'react';

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(intialGameBoard);

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={`row-${rowIndex}`}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={`cell-${rowIndex}-${colIndex}`}>
                <button onClick={() => null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}