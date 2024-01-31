import { useState } from "react"

export default function Player({ name, symbol }) {
  const [editing, setEditing] = useState(false)
  const [playerName, setPlayerName] = useState(name)

  return (
    <>
      <li>
        <span className="player">
          {!editing && <span className="player-name">{playerName}</span>}
          {editing && <input type="text" value={playerName} onChange={event => setPlayerName(event.target.value)} required />}
          <span className="player-symbol">{symbol}</span>
        </span>
      </li>
      <button onClick={() => setEditing(!editing)}>{editing ? 'Save' : 'Edit'}</button>
    </>
  )
};