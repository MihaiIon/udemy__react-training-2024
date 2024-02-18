import { useState, useRef } from "react";

export default function Player() {
  const playerNameRef = useRef();

  const [playerName, setPlayerName] = useState("");
  const [savedPlayerName, setSavedPlayerName] = useState("");
  const computedPlayerName = savedPlayerName ?? "unkown entity";
  
  return (
    <section id="player">
      <h2>Welcome {computedPlayerName}</h2>
      <p>
        <input ref={playerNameRef} type="text" onChange={event => setPlayerName(event.target.value)} value={playerName} />
        <button onClick={() => setSavedPlayerName(playerName)}>Set Name</button>
      </p>
    </section>
  );
}
