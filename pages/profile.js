import { NextPage } from "next";
import React from "react";
import { useSelector } from "react-redux";
import StoreProfile from "./store/profile";
import CustomerProfile from "./customer/profile";
import Loading from "../components/Loading";

const Profile = () => {
  const profile = useSelector((state) => state.profile);

  if (profile?.isLoading) {
    return <Loading />;
  }

  if (profile?.isStore) return <StoreProfile />;
  else return <CustomerProfile />;
};

export default Profile;
