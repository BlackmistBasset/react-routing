import { useState } from "react";

import { Header } from "./layout/Header";

import { Main } from "./layout/Main";
import { Box } from "@mui/material";
import { Footer } from "./layout/Footer";
import { Login } from "./pages/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Main isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Login setIsLoggedIn={setIsLoggedIn} />
      <Footer />
      <Box />
    </>
  );
}

export default App;
