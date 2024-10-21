// src/components/Sidebar.js
import React, { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  Avatar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch("http://localhost:5000/auth/user", {
          credentials: "include", // To send cookies with the request
        });
        if (!response.ok) throw new Error("Failed to fetch user info");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/logout", {
        credentials: "include",
      });
      if (!response.ok) throw new Error("Logout failed");
      navigate("/"); // Redirect to login page
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <Box sx={{ width: 250, borderRight: "1px solid #ddd", padding: 2 }}>
      {user && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Avatar sx={{ width: 56, height: 56 }}>
            {user.email.charAt(0).toUpperCase()}{" "}
            {/* Display first letter of user's email */}
          </Avatar>
          <Typography variant="h6" sx={{ marginTop: 1 }}>
            {user.email}
          </Typography>
        </Box>
      )}
      <List>
        <ListItem button onClick={() => navigate("/mails")}>
          <ListItemText primary="Mail History" />
        </ListItem>
        <ListItem button onClick={() => navigate("/compose")}>
          <ListItemText primary="Compose Mail" />
        </ListItem>
      </List>
      <Box sx={{ marginTop: "auto", textAlign: "center" }}>
        <Button variant="outlined" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
