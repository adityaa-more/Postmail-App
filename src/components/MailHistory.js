import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MailHistory = () => {
  const [mailHistory, setMailHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMailHistory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/communication-history", // Adjusted to your backend URL
          { withCredentials: true }
        );
        setMailHistory(response.data); // Assuming response.data contains the array of messages
      } catch (error) {
        setError("Error fetching mail history.");
        console.error("Error fetching mail history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMailHistory();
  }, []);

  const handleMailClick = (mailId) => {
    console.log("Mail ID clicked:", mailId); // Log the mail ID
    navigate(`/mail/${mailId}`); // Navigate to the mail detail page
  };

  if (loading) return <CircularProgress />; // Show loading indicator while fetching data
  if (error) return <Typography color="error">{error}</Typography>; // Display error message if there's an error

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Mail History
      </Typography>
      <List>
        {mailHistory.map((mail) => (
          <ListItem
            button
            key={mail.id} // Use `id` as the unique key from the JSON file
            onClick={() => handleMailClick(mail.id)} // Navigate to the mail details using mail id
            divider
          >
            <ListItemText
              primary={mail.subject} // Display the subject of the email
              secondary={`To: ${mail.to} | Sent: ${new Date( // Use `to` and `date` from the JSON structure
                mail.date
              ).toLocaleString()}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MailHistory;
