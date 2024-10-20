import React from "react";
import styles from "./Row.module.css";

const Row = ({ name, company, phone, email, country, isActive = false }) => {
  return (
    <tr>
      <td>{name}</td>
      <td className={styles.company}>{company}</td>
      <td>{phone}</td>
      <td className={styles.email}>{email}</td>
      <td>{country}</td>
      <td className={styles.statusContainer}>
        <span
          className={`${styles.status} ${
            isActive ? styles.active : styles.inactive
          }`}
        >
          {isActive ? "Active" : "Inactive"}
        </span>
      </td>
    </tr>
  );
};

export default Row;
