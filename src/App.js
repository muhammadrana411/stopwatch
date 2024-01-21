import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [time, setTime] = useState(0);
  let [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="Timers">
      <h2>Stopwatch</h2>
      <div id="display">
        <span>{("0" + Math.round((time / 60000) % 60)).slice(-2)}</span>:
        <span>{("0" + Math.round((time / 1000) % 60)).slice(-2)}</span>:
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div id="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time !== 0 && (
          <button onClick={() => setTimerOn(true)}>Resume</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
      </div>
    </div>
  );
}

export default App;
