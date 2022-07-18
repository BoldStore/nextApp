import React from "react";
import Header from "../../components/CommonComponents/Header";
import styles from "../../styles/Sales.module.css";
import { ChevronRight } from "react-feather";
import Info from "../../components/CommonComponents/Info";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

function Sales() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        {/* <ThemeProvider theme={darkTheme}>
        <Box sx={{width:"20%" ,margin : 'auto', typography : "body1"}}>
        <TabContext >
          <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList centered aria-label="lab API tabs example">
            <Tab label="Dashboard" value="1" />
            <Tab label="Pending Sales" value="2" />
          </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        </TabContext>
        </Box>
      </ThemeProvider> */}

        <h1>Dashboard</h1>
        {/* <div className={styles.tableContainer}>
          <SalesList />
        </div> */}

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
              <td>Delivery Pending</td>
              <td>#21626791</td>
              <td>
                <ChevronRight className={styles.icon} />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Sales;
