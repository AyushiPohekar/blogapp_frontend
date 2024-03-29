import axios from "axios";
import { toast } from "react-toastify";

export const getAllPosts = async () => {
  const res = await axios.get("/posts");
  if (res.status !== 200) {
    return console.log("Some error occurred");
  }
  const data = res.data;
  return data;
};

export const sendAuthRequest1 = async (signup, data) => {
  console.log("signup:", signup, "data:", data);
  try {
    const res = await axios.post(`/users/signup`, {
      name: data.name ? data.name : "",
      email: data.email,
      password: data.password,
    });
    console.log(res);
    const resData = await res.data;
    console.log(resData);
    return resData;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error.response.data.message);
  }
};
export const sendAuthRequest2 = async (signup, data) => {
  //console.log('signup:',signup,'data:',data)
  try {
    const res = await axios.post(`/users/login`, {
      email: data.email,
      password: data.password,
    });
    console.log(res);
    const resData = await res.data;
    console.log(resData);
    return resData;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error.response.data.message);
  }
};

export const addPost = async (data) => {
  console.log("add")
  const res = await axios
    .post("/posts/", {
      title: data.title,
      description: data.description,
      location: data.location,
      image: data.image,
      date: data.date,
      user: localStorage.getItem("userId"),
    })
    .catch((err) => console.log(err));
  console.log("res", res);
  if (res.status !== 201) {
    return console.log("Error Occurred");
  }

  const resData = await res.data;
  console.log("resData", resData);
  return resData;
};

export const getPostDetails = async (id) => {
  const res = await axios.get(`/posts/${id}`).catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("Unable to fetch diary");
  }

  const resData = await res.data;
  return resData;
};

export const postUpdate = async (data, id) => {
  const res = await axios
    .put(`/posts/${id}`, {
      title: data.title,
      description: data.description,
      location: data.location,
      image: data.image,
    })
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unable to udpate");
  }

  const resData = await res.data;
  return resData;
};

export const postDelete = async (id) => {
  const res = await axios
    .delete(`/posts/${id}`)
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unable to delete");
  }

  const resData = await res.data;
  return resData;
};

export const getUserDetails = async () => {
  const id = localStorage.getItem("userId");
  const res = await axios.get(`/users/${id}`).catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("No user found");
  }

  const resData = await res.data;
  return resData;
};
