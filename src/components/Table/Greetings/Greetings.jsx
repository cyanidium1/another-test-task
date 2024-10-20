import React from "react";
import styles from "./Greetings.module.css";

const Greetings = () => {
  return (
    <div className={styles.greetingsContainer}>
      <h1 className={styles.greetingTitle}>
        Hello Evano
        <span role="img" aria-label="wave">
          👋
        </span>
        ,
      </h1>
    </div>
  );
};

export default Greetings;
