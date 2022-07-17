import React from "react";
import Header from "../../components/CommonComponents/Header";
import styles from "../../styles/Sales.module.css";
import BoldButton from "../../components/CommonComponents/BoldButton";
import Info from "../../components/CommonComponents/Info";

function Sales() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Dashboard</h1>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            {/* <tr>
              <th>Order ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Payment Status</th>
              <th>Payment Id</th>
              <th>Shiprocket Status</th>
              <th>Shiprocket Id</th>
            </tr> */}
            <tr>
              <td>
                <Info />
              </td>
              <td>22/22/22 </td>
              <td>10:00PM</td>
              <td style={{ minWidth: "120px" }}>Payment ID:</td>
              <td>#17276381812</td>
              <td>Paid</td>
              <td style={{ minWidth: "130px" }}>Shiprocket ID:</td>
              <td>#123447762</td>
              <td>Delivered</td>
              <td>
                <button className={styles.buttonFilled}>More Details</button>
              </td>
            </tr>

            <tr>
              <td>
                <Info />
              </td>
              <td>22/22/22 </td>
              <td>10:00PM</td>
              <td style={{ minWidth: "120px" }}>Payment ID:</td>
              <td>#17276381812</td>
              <td>Paid</td>
              <td style={{ minWidth: "130px" }}>Shiprocket ID:</td>
              <td>#123447762</td>
              <td>Delivered</td>
              <td>
                <button className={styles.buttonFilled}>More Details</button>
              </td>
            </tr>

            <tr>
              <td>
                <Info />
              </td>
              <td>22/22/22 </td>
              <td>10:00PM</td>
              <td style={{ minWidth: "120px" }}>Payment ID:</td>
              <td>#17276381812</td>
              <td>Paid</td>
              <td style={{ minWidth: "130px" }}>Shiprocket ID:</td>
              <td>#123447762</td>
              <td>Delivered</td>
              <td>
                <button className={styles.buttonFilled}>More Details</button>
              </td>
            </tr>
            <tr>
              <td>
                <Info />
              </td>
              <td>22/22/22 </td>
              <td>10:00PM</td>
              <td style={{ minWidth: "120px" }}>Payment ID:</td>
              <td>#17276381812</td>
              <td>Paid</td>
              <td style={{ minWidth: "130px" }}>Shiprocket ID:</td>
              <td>#123447762</td>
              <td>Delivered</td>
              <td>
                <button className={styles.buttonFilled}>More Details</button>
              </td>
            </tr>
          </table>
        </div>
        <div style={{ marginTop: "3rem" }}></div>
        {/* <BoldButton text={"Show Pending Sales"} href="/store/pendingsales" /> */}
      </div>
    </div>
  );
}

export default Sales;
