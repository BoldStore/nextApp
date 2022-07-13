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
        <h1>Pending Sales</h1>
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
                <Info></Info>
              </td>
              <td>22/22/22 10:00PM</td>
              <td>
                <button className={styles.button}>Paid</button>
              </td>
              <td>Shiprocket ID: abuaygugs</td>
              <td>
                <button className={styles.button}>Delivered</button>
              </td>
              <td>
                <BoldButton text="See Product"></BoldButton>
              </td>
            </tr>
            <tr>
              <td>
                <Info></Info>
              </td>
              <td>22/22/22 10:00PM</td>
              <td>
                <button className={styles.button}>Paid</button>
              </td>
              <td>Shiprocket ID: abuaygugs</td>
              <td>
                <button className={styles.button}>Delivered</button>
              </td>
              <td>
                <BoldButton text="See Product"></BoldButton>
              </td>
            </tr>
            <tr>
              <td>
                <Info></Info>
              </td>
              <td>22/22/22 10:00PM</td>
              <td>
                <button className={styles.button}>Paid</button>
              </td>
              <td>Shiprocket ID: abuaygugs</td>
              <td>
                <button className={styles.button}>Delivered</button>
              </td>
              <td>
                <BoldButton text="See Product"></BoldButton>
              </td>
            </tr>
            <tr>
              <td>
                <Info></Info>
              </td>
              <td>22/22/22 10:00PM</td>
              <td>
                <button className={styles.button}>Paid</button>
              </td>
              <td>Shiprocket ID: abuaygugs</td>
              <td>
                <button className={styles.button}>Delivered</button>
              </td>
              <td>
                <BoldButton text="See Product"></BoldButton>
              </td>
            </tr>
            {/* <tr>
              <td>12345VHW</td>
              <td>Jeans</td>
              <td>$2200</td>
              <td>
                <a href="https://www.instagram.com/avi_vashishta">
                  @avi_vashishta
                </a>
              </td>
              <td>22/07/22</td>
              <td>Completed</td>
              <td>12345VHW</td>
              <td>Delivery Pending</td>
              <td>1234NQWHW</td>
            </tr> */}
          </table>
        </div>
        <BoldButton text={"Show all sales"} href="/store/pendingsales" />
      </div>
    </div>
  );
}

export default Sales;
