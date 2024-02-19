import classes from './Challenges.module.css'

export default function Challanges({children}) {
  return <section className={classes.challenges}>
    {children}
  </section>
};