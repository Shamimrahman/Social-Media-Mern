import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    minWidth: 50,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "15px",
  },

  pos: {
    marginBottom: 12,
  },
}));
