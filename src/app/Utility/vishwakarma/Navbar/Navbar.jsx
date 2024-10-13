import styles from "./Navbar.module.css";

export default function Navbar({
  navbarOptions = [],
  onItemClick = () => {},
  activePath = "/",
}) {
  return (
    <div className={styles.contentWrapper}>
      {navbarOptions.map((item) => {
        return (
          <div
            key={item?.id}
            className={`${styles.itemContainer} ${
              activePath === item?.route && styles.active
            }`}
            onClick={(e) => onItemClick(e, item)}
          >
            <div>{item?.icon}</div> <div>{item?.label}</div>
          </div>
        );
      })}
    </div>
  );
}
