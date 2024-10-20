import React, { useState } from "react";
import styles from "./Tablemain.module.css";
import customers from "./data.json"; // Correct path to your data file
import Row from "./Row/Row";
import SearchInput from "../../UI/SearchInput/SearchInput";
import Pagination from "./Pagination/Pagination";

const Tablemain = () => {
  const [input, setInput] = useState(""); // Для хранения текста поиска

  const filteredCustomers = customers.filter((customer) => {
    const searchText = input.toLowerCase();
    return (
      customer.name.toLowerCase().includes(searchText) ||
      customer.company.toLowerCase().includes(searchText) ||
      customer.phone.toLowerCase().includes(searchText) ||
      customer.email.toLowerCase().includes(searchText) ||
      customer.country.toLowerCase().includes(searchText) ||
      (customer.isActive ? "active" : "inactive").includes(searchText)
    );
  });

  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.tableTitle}>All Customers</h2>
      <p className={styles.subtitle}>Active members</p>
      <div className={styles.searchPosition}>
        <SearchInput input={input} setInput={setInput} />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th className={styles.company}>Company</th>
            <th>Phone Number</th>
            <th className={styles.email}>Email</th>
            <th>Country</th>
            <th className={styles.statusContainer}>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => {
            const { id, name, company, phone, email, country, isActive } =
              customer;
            return (
              <Row
                key={id}
                name={name}
                company={company}
                phone={phone}
                email={email}
                country={country}
                isActive={isActive}
              />
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Tablemain;
