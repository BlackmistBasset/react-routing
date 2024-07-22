import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
export const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/detail/2");
  };
  return (
    <div>
      <Button onClick={handleLogin}>Iniciar Sesión</Button>
    </div>
  );
};
