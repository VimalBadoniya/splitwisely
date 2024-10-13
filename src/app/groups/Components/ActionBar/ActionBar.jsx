import { HiMiniUserGroup } from "react-icons/hi2";
import styles from "./ActionBar.module.css";
import Button from "@/app/Utility/vishwakarma/Button/Button";

export default function ActionBar() {
  return (
    <div className={styles.itemContainer}>
      <input
        className={styles.searchInput}
        placeholder="Search for Group, Expense, Friend.."
      />
      <Button
        label={
          <>
            <span>+Add</span>
            <HiMiniUserGroup />
          </>
        }
      />
    </div>
  );
}
