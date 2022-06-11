import { NextPage } from "next";
import React from "react";
import { useSelector } from "react-redux";
import StoreHomePage from "./store";
import Loading from "../components/Loading";

const HomePage: NextPage = () => {
  const profile = useSelector((state: any) => state.profile);

  if (profile?.isLoading) {
    return <Loading />;
  }

  return <StoreHomePage />;
};

export default HomePage;
