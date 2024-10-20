import React from "react";
import styles from "./Table.module.css";
import Greetings from "./Greetings/Greetings";
import Tablemain from "./Tablemain/Tablemain";

const Table = () => {
  return (
    <div className={styles.container}>
      <Greetings />
      <Tablemain />
    </div>
  );
};

export default Table;
