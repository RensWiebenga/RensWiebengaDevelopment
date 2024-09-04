import classes from "./Logo.module.css";
import logo from "../../../../assets/logo.png";

export default function Logo() {
  return (
    <div className={classes.container}>
      <img src={logo} alt="Rens Wiebenga Development" />
      <div className={classes.title}>Rens Wiebenga Development</div>
    </div>
  );
}
