import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { AUTH_ROUTE } from "../utils/consts";

const Navbar = () => {
  const auth = false;
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            Chatbot
          </Typography>
          <Grid>
            {auth ? (
              <Button color="inherit">Logout</Button>
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
