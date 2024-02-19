import { useRef, useState } from "react";

import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timerRef = useRef(null);

  const [timerRunning, setTimerRunning] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const setTimer = () => {
    if (timerRunning) return;

    timerRef.current = setTimeout(() => {
      setTimerExpired(true);
      setTimerRunning(false);

      clearTimeout(timerRef.current);
      timerRef.current = null;
    }, targetTime * 1000);
  };

  const startTimer = () => {
    if (timerRunning) return;
    setTimer();

    setTimerExpired(false);
    setTimerRunning(true);
  };

  const stopTimer = () => {
    if (!timerRunning) return;
    setTimerRunning(false);

    clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <ResultModal result="Lost" targetTime={targetTime} />}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={!timerRunning ? startTimer : stopTimer}>
          {!timerRunning ? "Start" : "Stop"}
        </button>
      </p>
      <p className={timerRunning ? "active" : ""}>
        {timerRunning ? "Time is running" : "Timer is stopped"}
      </p>
    </section>
  );
}
