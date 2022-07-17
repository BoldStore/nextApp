import React from "react";
import Header from "../../components/CommonComponents/Header";
import styles from "../../styles/Sales.module.css";
import BoldButton from "../../components/CommonComponents/BoldButton";
import Info from "../../components/CommonComponents/Info/Info";
import SalesList from "../../components/StoreComponents/Dashboard/SalesList";

function Sales() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Dashboard</h1>
        <div className={styles.tableContainer}>
          <SalesList />
        </div>
      </div>
    </div>
  );
}

export default Sales;
