import Modal from "@/app/Utility/vishwakarma/Modal/Modal";
import styles from "./CreateNewGroup.module.css";
import { GROUP_TYPE } from "../../Constants/constants";

export default function CreateNewGroup({ setShowCreateGroupModal }) {
  return (
    <Modal>
      <div className={styles.modalContent}>
        <header className={styles.modalHeader}>
          <span>Create a Group</span>
          <span
            className={styles.closeButton}
            onClick={() => setShowCreateGroupModal(false)}
          >
            X
          </span>
        </header>
        <form>
          <div>
            <label htmlFor="group-name">Group Name</label>
            <input id="group-name" />
          </div>
          <div>
            <label>Type</label>
            <div className={styles.groupTypeContainer}>
              {GROUP_TYPE.map((type) => (
                <div key={type.id} className={styles.groupType}>
                  <span>{type.icon}</span>
                  <span>{type.label}</span>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
