import React from "react";
import styles from "./SingleSection.module.css";

const SingleSection = ({ title, image, isActive, onClick }) => {
  return (
    <li
      className={`${styles.listItem} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <div className={styles.icon}>{image}</div>
      <p className={styles.title}>{title}</p>

      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.chevron}
      >
        <path
          d="M6 12L10 8L6 4"
          stroke="#9197B3"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </li>
  );
};

export default SingleSection;
