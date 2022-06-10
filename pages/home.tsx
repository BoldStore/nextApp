import { NextPage } from "next";
import React from "react";
import { useSelector } from "react-redux";
import StoreHomePage from "./store";
import CustomerHomePage from "./customer";
import Loading from "../components/Loading";

const HomePage: NextPage = () => {
  const profile = useSelector((state: any) => state.profile);

  if (profile?.isLoading) {
    return <Loading />;
  }

  // if (profile?.isStore) return
  return <StoreHomePage />;
  // else return <CustomerHomePage />;
};

export default HomePage;
