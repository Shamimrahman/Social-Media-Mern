import React, { useState,useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { createPost,updatePost } from "../../actions/postAction";
import { useDispatch,useSelector } from "react-redux";
const Form = ({currentId,setcurrentId}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  //for update
  const [postData, setpostData] = useState({
    title: "",
    creator: "",
    message: "",
    tags: "",
    selectedFlie: "",
  });

  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
//get data for update in form
useEffect(() => {
  if (post) setpostData(post);
}, [post]);


  let name, value;
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setpostData({ ...postData, [name]: value });
  };

  const clear=()=>{
    setcurrentId(0)
    setpostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
   if(currentId===0){
    dispatch(createPost(postData));
    clear()
   }
   else{
     dispatch(updatePost(currentId,postData))
     clear()
   }
  };

  
  

  return (
    <div>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">{currentId?`Editing ${post.title}`:'Food Blog'}</Typography>
          <TextField
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            onChange={handleInput}
            value={postData.creator}
          />
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            onChange={handleInput}
            value={postData.title}
          />
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            multiline
            rows={4}
            onChange={handleInput}
            value={postData.message}
          />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags (coma separated)"
            fullWidth
            onChange={handleInput}
            value={postData.tags}
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setpostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button variant="contained" onClick={clear} color="secondary" size="small" fullWidth>
            Clear
          </Button>
        </form>
      </Paper>
    </div>
    /**Done */
  );
};

export default Form;
