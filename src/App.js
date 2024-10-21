// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MailHistory from "./components/MailHistory";
import ComposeMail from "./components/ComposeMail";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { Box } from "@mui/material";
import MailDetail from "./components/MailDetail";

const App = () => {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/mails" element={<MailHistory />} />
            <Route path="/compose" element={<ComposeMail />} />
            <Route path="/mail/:id" element={<MailDetail />} />{" "}
            {/* New route for mail details */}
            {/* Add more routes as needed */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
