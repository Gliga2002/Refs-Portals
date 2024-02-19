import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import classes from './ResultModal.module.css';

const ResultModal = forwardRef(function ResultModal(
  { initTimeSeconds, timer, onRestart },
  ref
) {
  const dialogEl = useRef();

  // derive states
  const userLost = timer <= 0;
  const formattedTimer = (timer / 1000).toFixed(2);
  const score = Math.round((1 - timer / (initTimeSeconds * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogEl.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog className={classes['result-modal']} ref={dialogEl} onClose={onRestart}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>You're score: {score}</h2>}
      <p>
        The target time was <strong>{initTimeSeconds}</strong> seconds.{" "}
      </p>
      <p>
        You stopped the timer with{" "}
        <strong> {formattedTimer} seconds left </strong>
      </p>
      <form method="dialog">
        <button onClick={onRestart}>Close</button>
      </form>
    </dialog>,
    document.querySelector("#modal")
  );
});

export default ResultModal;
