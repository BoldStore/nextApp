import React from "react";
import BarChart from "../../components/StoreComponents/Dashboard/BarChart";
import LineChart from "../../components/StoreComponents/Dashboard/LineChart";
import styles from "./store.module.css";
import PieChart from "../../components/StoreComponents/Dashboard/PieChart";
import Analytics from "../../components/StoreComponents/Dashboard/Analytics";
import DoughnutChart from "../../components/StoreComponents/Dashboard/DoughnutChart";
import BestPost from "../../components/StoreComponents/Dashboard/BestPost";
import WorstPost from "../../components/StoreComponents/Dashboard/WorstPost";
import StoreHeader from "../../components/StoreComponents/Header";

// import { getCookie } from "cookies-next";
// import { firebaseAdmin } from "../../firebaseAdmin";

// export async function getServerSideProps({ req, res }) {
//   const token = getCookie("token", { req, res });
//   let user;
//   try {
//     user = await firebaseAdmin.auth().verifyIdToken(token);
//     return {
//       props: {
//         user,
//       },
//     };
//   } catch (e) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/store/signup",
//       },
//       props: {},
//     };
//   }
// }

function Dashboard() {
  return (
    <>
      <StoreHeader />
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <h1>Dashboard</h1>
        </div>
        <div className={styles.dashboardContainer}>
          <LineChart />
          <BarChart />
          <PieChart />
          <DoughnutChart />
          <BestPost />
          <WorstPost />
          <Analytics />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
