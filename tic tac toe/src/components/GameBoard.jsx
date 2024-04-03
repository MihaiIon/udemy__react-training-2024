export default function GameBoard({ currentPlayer, gameState, onPlayerAction }) {
  const { gameBoard } = gameState;

  const updateGameBoard = ({ rowIndex, colIndex }) => {
    if (gameState.isGameOver) return;
    if (gameBoard[rowIndex][colIndex] !== null) return;

    const newGameBoard = gameBoard.map(row => [...row]);
    newGameBoard[rowIndex][colIndex] = currentPlayer.symbol;

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