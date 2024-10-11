import { BUTTON_TYPES } from "../Constants/constants";

export default function Button({
  label = "Click Here",
  onClickHandler = () => {},
  type = BUTTON_TYPES.GENERAL,
}) {
  return (
    <button
      onClick={(e) => {
        onClickHandler(e);
      }}
    >
      {label}
    </button>
  );
}
