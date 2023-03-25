import { Button, FormLabel, TextField, Typography } from "@mui/material";
import { borderRadius, Box, fontSize } from "@mui/system";
import React, { useState } from "react";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import {
  TravelExploreOutlined,
  TravelExploreRounded,
} from "@mui/icons-material";
import { addPost } from "../api-helpers/helper";
import { useNavigate } from "react-router-dom";
const Add = () => {
  const navigate = useNavigate();
  const onResReceived = (data) => {
    console.log(data);
    navigate("/diaries");
  };
    const handleSubmit=(e)=>{
   e.preventDefault();
   console.log(inputs)
   addPost(inputs).then(onResReceived).catch((err)=>console.log(err))
    }
  const [inputs, setInputs] = useState({
    title: "",
    location: "",
    description: "",
    image: "",
    date: "",
  });
  const handleChange=(e)=>{
    setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      height={"100%"}
    >
      <Box display={"flex"} margin={"auto"} padding={2}>
        <Typography
          variant="h4"
          fontFamily={"dancing script"}
          fontWeight="bold"
        >
          Add Your Travel Diary
        </Typography>
        <TravelExploreIcon
          sx={{ color: "lightcoral", fontSize: "40px", paddingLeft: 1 }}
        />
      </Box>
      <form onSubmit={handleSubmit}>
        <Box
          padding={3}
          display="flex"
          margin="auto"
          flexDirection={"column"}
          width="70%"
        >
          <FormLabel sx={{ fontFamily: "quicksand" }}>Title</FormLabel>
          <TextField onChange={handleChange} name='title' value={inputs.title} variant="standard" margin="normal" />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Description</FormLabel>
          <TextField
            onChange={handleChange}
            name="description"
            value={inputs.description}
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Image URL</FormLabel>
          <TextField
           onChange={handleChange}
            name="image"
            value={inputs.image}
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Location</FormLabel>
          <TextField
           onChange={handleChange}
            name="location"
            value={inputs.location}
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Date</FormLabel>
          <TextField
          type={'date'}
           onChange={handleChange}
            name="date"
            value={inputs.date}
            variant="standard"
            margin="normal"
          />
          <Button
            type='submit'
            variant="contained"
            color="warning"
            sx={{ mt: 2, width: "50%", margin: "auto", borderRadius: 7, mt: 2 }}
          >
            Post
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Add;
