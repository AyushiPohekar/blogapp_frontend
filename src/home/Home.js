import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const navigate = useNavigate();
  return (
    <Box position={"relative"} width="100%" height="90vh">
      <img
        src="/coverpic3.jpg"
        alt="coverpic"
        width="100%"
        height="70%"
        style={{ objectFit: "cover" }}
      />
      <Typography
        fontFamily="Dancing Script, cursive"
        fontWeight="bold"
        variant="h3"
        textAlign="center"
        width="100%"
        sx={{
          position: "absolute",
          top: "0px",
          color: "#F3E7D8",
          background: "transparent",
        }}
      >
        Jobs fill your pockets, adventures fill your soul.
      </Typography>
      <Box width={"100%"} height="30%" display={"flex"} flexDirection="column">
        <Typography
          fontFamily={"Quicksand"}
          textAlign="center"
          variant="h4"
          padding={4}
        >
          SHARE YOUR TRAVEL DIARIES WITH US
        </Typography>
        <Box margin="auto">
          {isLoggedIn ? (
            <Button
              variant="outlined"
              sx={{ mr: 2 }}
              onClick={() => navigate("/add")}
            >
              Share Your Story
            </Button>
          ) : (
            <Button variant="outlined" sx={{ mr: 2 }}  onClick={() => navigate("/auth")}>
              Share Your Story
            </Button>
          )}

          <Button
            LinkComponent={Link}
            to="/diaries"
            variant="contained"
            sx={{ ml: 2 }}
          >
            View Diaries
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
