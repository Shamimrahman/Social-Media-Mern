import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";
const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts)
  return (
    !posts.length?<CircularProgress></CircularProgress>:
     (
       <Grid className={classes.container} container  alignItems="stretch" spacing={3}>
       {posts.map((post)=>(
        (
          <Grid key={post._id} item sm={6} xs={12} justify="space-between" md={6}>
          <Post post={post}></Post>
          </Grid>
          )
       ))}
       
       </Grid>
     )
  
  );
};


export default Posts;
