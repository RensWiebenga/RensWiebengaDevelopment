import classes from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={classes.container}>
      <img src="/src/assets/logo.png" alt="Rens Wiebenga Development" />
      <div className={classes.title}>Rens Wiebenga Development</div>
    </div>
  );
}
