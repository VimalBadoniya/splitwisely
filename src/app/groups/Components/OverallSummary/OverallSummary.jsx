import Button from "@/app/Utility/vishwakarma/Button/Button";
import { IoFilterCircle } from "react-icons/io5";
import styles from "./OverallSummary.module.css";

export default function OverallSummary() {
  return (
    <div>
      <span>
        Overall, you will get <span>$500</span>
      </span>
      <Button label={<IoFilterCircle />} styleClass={styles.filterButton} />
    </div>
  );
}
