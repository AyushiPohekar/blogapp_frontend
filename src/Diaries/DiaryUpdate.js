import { Button, FormLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostDetails, postUpdate } from "../api-helpers/helper";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import toast, { Toaster } from 'react-hot-toast';

const DiaryUpdate = () => {
  const navigate=useNavigate("")
  const [post, setPost] = useState();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    location: "",
    image: "",
  });
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    getPostDetails(id)
      .then((data) => {
        setPost(data.post);

        setInputs({
          title: data.post.title,
          description: data.post.description,
          image: data.post.image,
          location: data.post.location,
        });
   
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(inputs);
    postUpdate(inputs, id)
    .then((data) => {
      toast.success(data.message);
      navigate("/diaries");
    })
      .catch((err) => console.log(err));
  };
  return (
    <Box display="flex" flexDirection={"column"} width="100%" height="100%">
      <Box display="flex" margin="auto" padding={2}>
        <Typography
          fontWeight={"bold"}
          variant="h4"
          fontFamily={"dancing script"}
        >
          Add Your Travel Diary
        </Typography>
        <TravelExploreIcon
          sx={{ fontSize: "40px", paddingLeft: 1, color: "lightcoral  " }}
        />
      </Box>
      {post && (
        <form onSubmit={handleSubmit}>
          <Box
            padding={3}
            display="flex"
            width="80%"
            margin="auto"
            flexDirection={"column"}
          >
            <FormLabel sx={{ fontFamily: "quicksand" }}>Title</FormLabel>
            <TextField
              onChange={handleChange}
              name="title"
              value={inputs.title}
              variant="standard"
              margin="normal"
            />
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

            <Button
              type="submit"
              color="warning"
              sx={{ width: "50%", margin: "auto", mt: 2, borderRadius: 7 }}
              variant="contained"
            >
              Post
            </Button>
          </Box>
        </form>
      )}
           <Toaster />
    </Box>
  );
};

export default DiaryUpdate;