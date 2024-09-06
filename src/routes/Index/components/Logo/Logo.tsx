import classes from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={classes.container}>
      <div className={classes.logo} />
      <div className={classes.title}>
        <span>Rens Wiebenga </span>Development
      </div>
    </div>
  );
}
