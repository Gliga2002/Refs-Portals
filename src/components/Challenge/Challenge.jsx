import { useState, useRef } from "react";

import ResultModal from "../ResultModal/ResultModal";

import classes from './Challenge.module.css';

function Challenge({ title, timerSecond }) {
  const [timer, setTimer] = useState(timerSecond * 1000);
  const intervalId = useRef();
  const dialogEl = useRef();

  // derive state
  const isActive = timer > 0 && timer < timerSecond * 1000;

  function handleStart() {
    intervalId.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 10);
    }, 10);
  }

  function handleRestart() {
    setTimer(timerSecond * 1000);
  }

  if (timer <= 0) {
    clearInterval(intervalId.current);
    dialogEl.current.open();
  }

  function handleStop() {
    clearInterval(intervalId.current);
    dialogEl.current.open();
  }

  return (
    <>
    <ResultModal ref={dialogEl} timer={timer} initTimeSeconds={timerSecond} onRestart={handleRestart} />
    <div className={classes.challenge}>
      <h2>{title}</h2>
      <p className={classes['challenge-time']}>
        {timerSecond} second{timerSecond > 1 ? "s" : ""}
      </p>
      <button onClick={isActive ? handleStop : handleStart}>
        {isActive ? "Stop" : "Start"} Challenge
      </button>
      <p className={isActive ? classes.active : null}>
        Timer is {isActive ? "active" : "innactive"}
      </p>
    </div>
  </>
  );
}

export default Challenge;
