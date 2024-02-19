import { useRef, useState } from "react";
import classes from './Player.module.css';

function Player() {
  const [playerName, setPlayerName] = useState('');
  const inputEl = useRef();

  function handleClickBtn() {
    setPlayerName(inputEl.current.value);
    inputEl.current.value = '';
    inputEl.current.focus();
  }
  return (
    <section className={classes.player}>
      <h2>Welcome {playerName ? playerName : 'unknown entity'}</h2>
      <div className={classes['input-box']}>
        <input ref={inputEl} />
        <button onClick={handleClickBtn}>Set Name</button>
      </div>
    </section>
  );
}

export default Player;
