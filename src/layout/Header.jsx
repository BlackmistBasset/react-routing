import React from "react";
import { Navbar } from "../components/Navbar";

export const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  return <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />;
};
