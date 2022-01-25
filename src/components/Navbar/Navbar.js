import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { AUTH_ROUTE } from "../utils/consts";

const Navbar = () => {
  const { ga, user } = useAuth();
  console.log(user);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            Chatbot
          </Typography>
          <Grid>
            {user ? (
              <NavLink
                style={{ textDecoration: "none", color: "#1976D2" }}
                to={AUTH_ROUTE}
              >
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={() => signOut(ga)}
                >
                  Logout
                </Button>
              </NavLink>
            ) : (
              <NavLink
                style={{ textDecoration: "none", color: "#1976D2" }}
                to={AUTH_ROUTE}
              >
                <Button variant="contained" color="inherit">
                  Auth
                </Button>
              </NavLink>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
