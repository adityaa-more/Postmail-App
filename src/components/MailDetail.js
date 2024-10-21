import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Paper, Box } from "@mui/material";
import axios from "axios";

const MailDetail = () => {
  const { id } = useParams(); // Get the mail ID from the URL parameters
  const [mailDetail, setMailDetail] = useState(null);

  useEffect(() => {
    const fetchMailDetail = async () => {
      try {
        // Fetch mail details by ID from your new backend
        const response = await axios.get(`http://localhost:5000/mail/${id}`, {
          withCredentials: true,
        });
        setMailDetail(response.data);
      } catch (error) {
        console.error("Error fetching mail details:", error);
      }
    };

    fetchMailDetail();
  }, [id]);

  if (!mailDetail) return <Typography>Loading...</Typography>;

  return (
    <Paper elevation={3} style={{ padding: "16px", margin: "16px" }}>
      <Typography variant="h5">{mailDetail.subject}</Typography>
      <Typography variant="subtitle1">From: {mailDetail.from}</Typography>{" "}
      {/* Updated field to 'from' */}
      <Typography variant="subtitle1">To: {mailDetail.to}</Typography>{" "}
      {/* Updated field to 'to' */}
      <Typography variant="body1">
        Sent: {new Date(mailDetail.date).toLocaleString()}{" "}
        {/* Updated field to 'date' */}
      </Typography>
      <Box mt={2}>
        <Typography variant="body2">
          {mailDetail.body} {/* Display email body */}
        </Typography>
      </Box>
    </Paper>
  );
};

export default MailDetail;
