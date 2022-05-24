import React from "react";
import Grid1 from "../components/CommonComponents/Grids/grid1";
import Grid2 from "../components/CommonComponents/Grids/grid2";
import Grid3 from "../components/CommonComponents/Grids/grid3";
import Grid4 from "../components/CommonComponents/Grids/grid4";
import BoldButton from "../components/CommonComponents/BoldButton";
import OrderComponent from "../components/CommonComponents/OrderComponent";
import Post from "../components/CommonComponents/Post";
import SearchComponent from "../components/CommonComponents/Search";
import TopStores from "../components/CommonComponents/TopStores";
import Grid from "../components/Grid";
import BarChart from "../components/StoreComponents/Dashboard/BarChart";
import LineChart from "../components/StoreComponents/Dashboard/LineChart";

function trial() {
  return (
    <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
      <Grid1 />
      <Grid2 />
      <Grid3 />
      <Grid4 />
    </div>
  );
}

export default trial;
