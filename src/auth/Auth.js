import { Button, FormLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  sendAuthRequest1, sendAuthRequest2 } from "../api-helpers/helper";
import { authActions } from "../store";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onResReceived = (data) => {
    console.log(data);
    if (isSignUp) {
      localStorage.setItem("userId", data.user._id);
    } else {
      localStorage.setItem("userId", data.id);
    }
    dispatch(authActions.login());
    navigate("/diaries");
  };
  const [isSignUp, setIsSignUp] = useState(true);
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`inputs:`,inputs);

    if (isSignUp) {
      sendAuthRequest1(true, inputs)
        .then(onResReceived)
        .catch((err) => console.log(err));
    } else {
      sendAuthRequest2(false, inputs)
        .then(onResReceived)
        .catch((err) => console.log(err));
    }
  };

  return (
    <Box
      width={"40%"}
      borderRadius={10}
      boxShadow={"5px 5px 10px #ccc"}
      margin="auto"
      marginTop={10}
      padding="10px"
    >
      <form onSubmit={handleSubmit}>
        <Box
          display={"flex"}
          flexDirection="column"
          width={"60%"}
          padding={5}
          margin="auto"
        >
          <Typography variant="h4" textAlign={"center"} padding={1}>
            {isSignUp ? "SignUp" : "Login"}
          </Typography>
          {isSignUp && (
            <>
              <FormLabel>Name</FormLabel>
              <TextField
                margin="normal"
                value={inputs.name}
                name="name"
                onChange={handleChange}
              />
            </>
          )}
          <FormLabel>Email</FormLabel>
          <TextField
            margin="normal"
            value={inputs.email}
            name="email"
            onChange={handleChange}
            type="email"
            required
          />
          <FormLabel>Password</FormLabel>
          <TextField
            margin="normal"
            value={inputs.password}
            name="password"
            type="password"
            onChange={handleChange}
            required
          />
          {isSignUp ? (
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, borderRadius: "10px" }}
           
            >
              SignUp
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, borderRadius: "10px" }}
           
            >
              Login
            </Button>
          )}
          {isSignUp ? (
            <Button
              variant="outlined"
              sx={{ mt: 2, borderRadius: "10px" }}
              onClick={() => setIsSignUp(!isSignUp)}
            >
              Login
            </Button>
          ) : (
            <Button
              variant="outlined"
              sx={{ mt: 2, borderRadius: "10px" }}
              onClick={() => setIsSignUp(!isSignUp)}
            >
              Signup
            </Button>
          )}

          {/* <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, borderRadius: "10px" }}
          >
            {isSignUp ? "SignUp" : "Login"}
          </Button>
          <Button
            variant="outlined"
            sx={{ mt: 2, borderRadius: "10px" }}
            onClick={() => setIsSignUp(!isSignUp)}
          >
            Change to {isSignUp ? "Login" : "SignUp"}
          </Button> */}
        </Box>
      </form>
    </Box>
  );
};

export default Auth;
