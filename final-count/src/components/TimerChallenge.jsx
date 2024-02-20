import { useRef, useState } from "react";

import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timerRef = useRef();
  const modalRef = useRef();

  const [timerRunning, setTimerRunning] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const setTimer = () => {
    timerRef.current = setTimeout(() => {
      setTimerExpired(true);
      setTimerRunning(false);
      clearTimeout(timerRef.current);
      timerRef.current = null;

      modalRef.current.open();
    }, targetTime * 1000);
  };
  
  const startTimer = () => {
    if (!timerRunning) {
      setTimer();
      setTimerExpired(false);
      setTimerRunning(true);
    }
  };
  
  const stopTimer = () => {
    if (timerRunning) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      <ResultModal ref={modalRef} result="Lost" targetTime={targetTime} />
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
