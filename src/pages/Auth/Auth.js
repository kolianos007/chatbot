import { Alert, Button, ButtonGroup, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/Loader/Loader";

const Auth = () => {
  const { ga } = useAuth();
  const [isRegForm, setIsRegForm] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errorMess, setErrorMess] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(errorMess);

  useEffect(() => {
    return () => {};
  }, []);

  const sumbitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (isRegForm) {
      try {
        await createUserWithEmailAndPassword(
          ga,
          userData.email,
          userData.password
        );
      } catch (error) {
        setErrorMess(error.message);
        setLoading(false);
      }
    } else {
      try {
        await signInWithEmailAndPassword(ga, userData.email, userData.password);
      } catch (error) {
        setErrorMess(error.message);
        setLoading(false);
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
        {loading ? (
          <Loader />
        ) : (
          <form onSubmit={sumbitHandler}>
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
              sx={{ display: "block", marginTop: 2 }}
              required
            />
            <ButtonGroup variant="contained" sx={{ marginTop: 2 }}>
              <Button type="submit" onClick={() => setIsRegForm(true)}>
                Register
              </Button>
              <Button type="submit" onClick={() => setIsRegForm(false)}>
                Login
              </Button>
            </ButtonGroup>
          </form>
        )}
      </Grid>
    </>
  );
};

export default Auth;
