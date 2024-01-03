import * as React from "react";

import Snackbar from "@mui/material/Snackbar";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { Box } from "@mui/system";
import { Alert, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { getAllPosts, postDelete } from "../api-helpers/helper";
import toast, { Toaster } from "react-hot-toast";
const DiaryItem = ({
  title,
  location,
  image,
  description,
  id,
  date,
  user,
  name,
}) => {
  // const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  // setOpen(false);

  const navigate = useNavigate();
  const isLoggedInUser = () => {
    if (localStorage.getItem("userId") === user) {
      return true;
    } else {
      return false;
    }
  };

  // const deletedfunc=(data)=>{
  //   toast.success(data.message)
  // nbavigate('/diaries')

  // }
  const handleDelete = () => {
    console.log("hellos");
    postDelete(id)
      .then(() => getAllPosts())
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card
      sx={{
        width: "40%",
        height: "max-content",
        margin: 1,
        padding: 1,
        display: "flex",
        flexDirection: "column",
        boxShadow: "5px 5px 10px #ccc",
        // scrollbarWidth:'none',
        // overflowY:'scroll'
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <AddLocationAltIcon />
          </IconButton>
        }
        title={location}
        header={location}
        subheader={date}
      />
      <img
        height="194"
        src={image}
        alt={title}
        // style={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography paddingBottom={1} variant="h6" color="text.secondary">
          {title}
        </Typography>
        <hr />
        <Box paddingTop={1} display={"flex"}>
          <Typography width={"170px"} fontWeight="bold" variant="caption">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </CardContent>
      {isLoggedInUser() && (
        <CardActions sx={{ marginLeft: "auto" }}>
          <IconButton LinkComponent={Link} to={`/posts/${id}`} color="warning">
            <EditIcon />
          </IconButton>
          <IconButton color="error">
            <DeleteIcon onClick={handleDelete} />
          </IconButton>
        </CardActions>
      )}
      {/* <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          This is a success message!
        </Alert>
      </Snackbar> */}
    </Card>
  );
};

export default DiaryItem;
