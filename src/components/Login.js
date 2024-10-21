import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

function Login() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card style={{ padding: "2rem", width: "400px", textAlign: "center" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Login to Your Account
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Please login with your Google account to access the platform.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGoogleLogin}
            startIcon={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png"
                alt="Google"
                style={{ width: "20px" }}
              />
            }
            fullWidth
            style={{ marginTop: "2rem" }}
          >
            Login with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
