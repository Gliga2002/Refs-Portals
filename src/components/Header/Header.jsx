import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <h1>
        The <span>almost</span> final countdown
      </h1>
      <p>Stop the timer once you estimate that time is (almost) up</p>
    </header>
  );
}

export default Header;
