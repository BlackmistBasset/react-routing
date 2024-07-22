import React from "react";
import Container from "@mui/material/Box";

import { Routes, Route, Navigate } from "react-router";

import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/404";
import { Login } from "../pages/Login";
import { CardDetail } from "../components/CardDetail";

export const Main = ({ isLoggedIn, setIsLoggedIn }) => {
  console.log(isLoggedIn);
  return (
    <Container sx={{ paddingBlock: "50px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/contact"
          element={isLoggedIn ? <Contact /> : <Navigate to="/login" />}
        />

        <Route path="/detail/:id" element={<CardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
