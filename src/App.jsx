import React, { useEffect } from "react";
import useStyles from "./styles";
import { Typography, Container, AppBar, Grow, Grid } from "@material-ui/core";
import Posts from "./components/Posts/Posts.";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/postAction";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Food Blog
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
