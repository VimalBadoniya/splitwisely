import { BUTTON_TYPES } from "../Constants/constants";
import styles from "./Button.module.css";

export default function Button({
  label,
  onClickHandler = () => {},
  type = BUTTON_TYPES.GENERAL,
  styleClass,
}) {
  return (
    <button
      className={`${styles.button} ${styleClass}`}
      onClick={(e) => {
        onClickHandler(e);
      }}
    >
      {label}
    </button>
  );
}
