export default function Log({ turnsHistory }) {
  return (
    <ol id="log">
      {turnsHistory.map((turn, index) => (
        <li key={`turn-${index}`}>
          <span>{`${turn.player.name} played '${turn.player.symbol}' at (${turn.cell.row}/${turn.cell.col})`}</span>
        </li>
      ))}
    </ol>
  )
}