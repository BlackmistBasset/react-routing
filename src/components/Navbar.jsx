import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { Button } from "@mui/material";

import { Link } from "react-router-dom";

export const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
              <Link
                to="/contact"
                style={{ color: "white", textDecoration: "none" }}
              >
                Contacto
              </Link>

              <Button
                sx={{ color: "white", border: "1px solid white" }}
                onClick={handleLogin}
              >
                Iniciar Sesión
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
