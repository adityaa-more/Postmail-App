// src/components/ComposeMail.js
import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";

const ComposeMail = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSendEmail = async (e) => {
    e.preventDefault();

    // Placeholder function for future use
    console.log("Email details:", {
      to,
      subject,
      body,
    });

    alert("Compose Mail functionality not available");

    // Reset the form after placeholder function
    setTo("");
    setSubject("");
    setBody("");
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Compose Mail
      </Typography>
      <form onSubmit={handleSendEmail}>
        <TextField
          label="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          fullWidth
          multiline
          rows={4}
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Send Email
        </Button>
      </form>
    </Box>
  );
};

export default ComposeMail;
