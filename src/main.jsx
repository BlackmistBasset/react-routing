import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";

import { NotificationsProvider } from "./context/NotificationsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NotificationsProvider>
      <CssBaseline />
      <App />
    </NotificationsProvider>
  </BrowserRouter>
);
