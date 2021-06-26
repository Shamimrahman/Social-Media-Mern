import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles";
const Form = () => {
  const classes = useStyles();

  const [postData, setpostData] = useState({
    title: "",
    creator: "",
    message: "",
    tags: "",
    selectedFlie: "",
  });

  let name, value;
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setpostData({ ...postData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData);
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
          <Typography variant="h6">Form</Typography>
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
          <Button variant="contained" color="secondary" size="small" fullWidth>
            Clear
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Form;
