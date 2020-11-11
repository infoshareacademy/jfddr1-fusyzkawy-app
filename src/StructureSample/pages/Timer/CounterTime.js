import React, { useState, useEffect } from "react";

const CounterTime = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function start() {
    setIsActive(true);
  }
  function pause() {
    setIsActive(false);
  }
  function stop() {
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">{seconds}s</div>
      <div className="row">
        <button
          className={`button button-primary button-primary-inactive`}
          onClick={start}
        >
          Start
        </button>
        <button
          className={`button button-primary button-primary-active`}
          onClick={pause}
        >
          Pause
        </button>
        <button className="button" onClick={stop}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default CounterTime;
