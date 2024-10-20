import React from "react";
import styles from "./Pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <span className={styles.pageInfo}>
        Showing data 1 to 8 of 256K entries
      </span>
      <div className={styles.pageControls}>
        <button className={styles.pageButton}>&lt;</button>
        <button className={`${styles.pageButton} ${styles.activePage}`}>
          1
        </button>
        <button className={styles.pageButton}>2</button>
        <button className={styles.pageButton}>3</button>
        <button className={styles.pageButton}>4</button>
        <span className={styles.ellipsis}>...</span>
        <button className={styles.pageButton}>40</button>
        <button className={styles.pageButton}>&gt;</button>
      </div>
    </div>
  );
};

export default Pagination;
