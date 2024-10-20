import React from "react";
import styles from "./App.module.css"; // Import styles as a module
import Sidebar from "./Sidebar/Sidebar";
import Table from "./Table/Table";

function App() {
  return (
    <div className={styles.App}>
      <Sidebar />
      <Table />
    </div>
  );
}

export default App;
