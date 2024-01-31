import Player from "./Player"

export default function Players() {
  return (
    <ol id="players">
      <Player name="Player 1" symbol="X" />
      <Player name="Player 2" symbol="O" />
    </ol>
  )
};