import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getAllPosts } from "../api-helpers/helper";
import DiaryItem from "./DiaryItem";

const Diaries = () => {
  const [posts, setposts] = useState([]);
  console.log(posts);
  useEffect(() => {
    getAllPosts()
      .then((data) => setposts(data?.posts))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      padding={3}
      justifyContent="center"
      alignItems="center"
    >
      {posts.map((item, index) => {
        return (
          <>
            <DiaryItem
              date={new Date(`${item.date}`).toLocaleDateString()}
              description={item.description}
              image={item.image}
              id={item._id}
              location={item.location}
              title={item.title}
              key={index}
              user={item.user._id}
              name={item.user.name}
            />
          </>
        );
      })}
    </Box>
  );
};

export default Diaries;
