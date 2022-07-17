import React from "react";
import Header from "../../components/CommonComponents/Header";
import styles from "../../styles/Sales.module.css";
import BoldButton from "../../components/CommonComponents/BoldButton";
import Info from "../../components/CommonComponents/Info/Info";
import { Box } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme} from "@mui/material/styles";
import SalesList from "../../components/StoreComponents/Dashboard/SalesList";

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
        <div className={styles.tableContainer}>
          <SalesList />
        </div>
      </div>
    </div>
  );
}

export default Sales;
