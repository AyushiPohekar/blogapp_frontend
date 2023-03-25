import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Tab, Tabs, Toolbar } from "@mui/material";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import { Link } from "react-router-dom";

const linksArr = ["home", "diaries", "auth"];
const Header = () => {
  const [value, setValue] = useState();
  return (
    <AppBar sx={{ bgcolor: "transparent" ,position:"sticky"}}>
      <Toolbar>
        <ModeOfTravelIcon sx={{color:"black"}}/>
        <Tabs
          value={value}
          onChange={(e, val) => setValue(val)}
          sx={{ ml: "auto", textDecoration: "none" }}
        >
          {linksArr.map((link) => (
            <Tab
            LinkComponent={Link}
            to={`/${link === "home" ? " ":link}`}
              key={link}
              label={link}
              sx={{
                color: "black",
                textDecoration: "none",
                ":hover": {
                  textDecoration: "underline",
                  textUnderlineOffset: "18px",
                },
              }}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;