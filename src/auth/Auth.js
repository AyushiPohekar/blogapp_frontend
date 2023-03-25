import { Button, FormLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { sendAuthRequest } from "../api-helpers/helper";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  const handleChange = (e) => {
     setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
     }))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs)

    if (isSignUp) {
      sendAuthRequest(true, inputs)
        .then((data)=>console.log(data))
        .catch((err) => console.log(err));
    } else {
      sendAuthRequest(false, inputs)
        .then((data)=>console.log(data))
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
            required
          />
          <FormLabel>Password</FormLabel>
          <TextField
            margin="normal"
            value={inputs.password}
            name="password"
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, borderRadius: "10px" }}
          >
            {isSignUp ? "SignUp" : "Login"}
          </Button>
          <Button
            type="submit"
            variant="outlined"
            sx={{ mt: 2, borderRadius: "10px" }}
            onClick={() => setIsSignUp(!isSignUp)}
          >
            Change to {isSignUp ? "Login" : "SignUp"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Auth;
