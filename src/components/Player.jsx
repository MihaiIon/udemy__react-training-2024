import { useState } from "react"

export default function Player({ symbol, playerName, onPlayerNameChange, isActive }) {
  const [editing, setEditing] = useState(false)

  return (
    <>
      <li className={isActive ? 'active' : ''}>
        <span className="player">
          {!editing && <span className="player-name">{playerName}</span>}
          {editing && <input type="text" value={playerName} onChange={event => onPlayerNameChange(event.target.value)} required />}
          <span className="player-symbol">{symbol}</span>
        </span>
      </li>
      <button onClick={() => setEditing(!editing)}>{editing ? 'Save' : 'Edit'}</button>
    </>
  )
};