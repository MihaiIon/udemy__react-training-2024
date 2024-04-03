export const createPlayer = ({ name, symbol }) => ({ name, symbol });

export const createTurnHistory = ({ row, col, player }) => ({
  player,
  cell: { row, col },
});

export const findWinningPlayer = ({ gameBoard, player1, player2 }) => {
  const winningCombinations = [
    // Rows
    [gameBoard[0][0], gameBoard[0][1], gameBoard[0][2]],
    [gameBoard[1][0], gameBoard[1][1], gameBoard[1][2]],
    [gameBoard[2][0], gameBoard[2][1], gameBoard[2][2]],
    // Columns
    [gameBoard[0][0], gameBoard[1][0], gameBoard[2][0]],
    [gameBoard[0][1], gameBoard[1][1], gameBoard[2][1]],
    [gameBoard[0][2], gameBoard[1][2], gameBoard[2][2]],
    // Diagonals
    [gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]],
    [gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]],
  ];

  let firstPlayerWon = false;
  let secondPlayerWon = false;
  for (const combination of winningCombinations) {

    firstPlayerWon = combination.every((cell) => cell === player1.symbol);
    if (firstPlayerWon) return player1;

    secondPlayerWon = combination.every((cell) => cell === player2.symbol);
    if (combination.every((cell) => cell === player2.symbol)) return player2;
  }

  return null;
};

export const isGameDraw = (gameBoard) => {
  return gameBoard.every((row) => row.every((cell) => cell !== null));
}