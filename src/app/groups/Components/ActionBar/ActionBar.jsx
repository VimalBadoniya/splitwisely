"use client";
import { HiMiniUserGroup } from "react-icons/hi2";
import styles from "./ActionBar.module.css";
import Button from "@/app/Utility/vishwakarma/Button/Button";
import { useState } from "react";
import CreateNewGroup from "../CreateNewGroup/CreateNewGroup";

export default function ActionBar() {
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);

  function createNewGroupHandler() {}
  return (
    <>
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
          onClickHandler={() => setShowCreateGroupModal(true)}
        />
      </div>
      {showCreateGroupModal && (
        <CreateNewGroup setShowCreateGroupModal={setShowCreateGroupModal} />
      )}
    </>
  );
}
