import { Button, ButtonGroup, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const Auth = () => {
  const [isRegForm, setIsRegForm] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();

    if (isRegForm) {
      console.log("register");
    } else {
      console.log("login");
    }

    console.log(userData.email, userData.password);

    setUserData({
      email: "",
      password: "",
    });
  };
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ flexGrow: 1 }}
    >
      <form onSubmit={handleLogin}>
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          sx={{ display: "block" }}
          required
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          sx={{ display: "block" }}
          required
        />
        <ButtonGroup variant="contained">
          <Button type="submit" onClick={() => setIsRegForm(true)}>
            Register
          </Button>
          <Button type="submit" onClick={() => setIsRegForm(false)}>
            Login
          </Button>
        </ButtonGroup>
      </form>
    </Grid>
  );
};

export default Auth;
