import { NextComponentType } from "next";
import React from "react";
import { useSelector } from "react-redux";
import StoreHeader from "../../StoreComponents/Header";
import CustomerHeader from "../../CustomerComponents/Header";

const Header: NextComponentType = () => {
  const profile = useSelector((state: any) => state.profile);

  if (profile?.isStore) return <StoreHeader />;
  else return <CustomerHeader />;
};

export default Header;
