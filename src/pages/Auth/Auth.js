import { Alert, Button, ButtonGroup, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import useAuth from "../../hooks/useAuth";

const Auth = () => {
  const { ga } = useAuth();
  console.log(ga);

  const [isRegForm, setIsRegForm] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errorMess, setErrorMess] = useState("");

  const sumbitHandler = async (e) => {
    e.preventDefault();

    if (isRegForm) {
      try {
        await createUserWithEmailAndPassword(
          ga,
          userData.email,
          userData.password
        );
      } catch (error) {
        setErrorMess(error.message);
      }
    } else {
      try {
        await signInWithEmailAndPassword(ga, userData.email, userData.password);
      } catch (error) {
        setErrorMess(error.message);
      }
    }

    setUserData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      {errorMess && (
        <Alert severity="error" onClose={() => setErrorMess("")}>
          {errorMess}
        </Alert>
      )}
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ flexGrow: 1 }}
      >
        <form onSubmit={sumbitHandler}>
          {/* {isRegForm && (
            <TextField
              type="name"
              label="Name"
              variant="outlined"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              sx={{ display: "block" }}
              required
            />
          )} */}
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
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
    </>
  );
};

export default Auth;
