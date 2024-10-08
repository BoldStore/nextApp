import React, { useEffect } from "react";
import BarChart from "../../components/StoreComponents/Dashboard/BarChart";
import LineChart from "../../components/StoreComponents/Dashboard/LineChart";
import styles from "./store.module.css";
import PieChart from "../../components/StoreComponents/Dashboard/PieChart";
import Analytics from "../../components/StoreComponents/Dashboard/Analytics";
import DoughnutChart from "../../components/StoreComponents/Dashboard/DoughnutChart";
import BestPost from "../../components/StoreComponents/Dashboard/BestPost";
import WorstPost from "../../components/StoreComponents/Dashboard/WorstPost";
import Header from "../../components/CommonComponents/Header";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
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
  const profile = useSelector((state) => state.profile);
  const router = useRouter();
  useEffect(() => {
    if (!profile?.isStore) {
      router.push("/home");
    }
  }, [profile]);

  if (profile?.isStore)
    return (
      <>
        <Header />
        <div className={styles.container}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <h1>Analytics</h1>
          </div>
          <div className={styles.dashboardContainer}>
            <BarChart />
            <LineChart />
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
