import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    marginBottom: "40px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "& > .input": {
      width: "70%"
    }
  }
}));

const SearchBar = ({ setQuery }) => {
  let timeoutID = null;

  const debounceQuery = query => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      setQuery(query);
    }, 300);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        id="standard-basic"
        label="Search images!"
        className="input"
        onChange={e => debounceQuery(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;
