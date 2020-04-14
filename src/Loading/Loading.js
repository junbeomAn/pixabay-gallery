import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: props => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 99,
    width: 800,
    height: 500,
    backgroundColor: "rgba(255,255,255, 0.6)"
  }),
  loading: props => ({
    width: "150px",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15px",
    backgroundColor: "black",
    boxShadow: "1px 1px 5px #5a5a5a, 1px 1px 5px #5a5a5a",
    color: "white",
    opacity: "0.9"
  }),
  letter: {
    animation: "$loading 0.5s infinite"
  },
  "@keyframes loading": {
    "0%": {
      opacity: 0
    },
    "100%": {
      opacity: 1
    }
  },
  "l-1": {
    animationDelay: "0s"
  },
  "l-2": {
    animationDelay: "0.05s"
  },
  "l-3": {
    animationDelay: "0.1s"
  },
  "l-4": {
    animationDelay: "0.15s"
  },
  "l-5": {
    animationDelay: ".20s"
  },
  "l-6": {
    animationDelay: ".25s"
  },
  "l-7": {
    animationDelay: ".30s"
  },
  "l-8": {
    animationDelay: ".35s"
  },
  "l-9": {
    animationDelay: ".40s"
  },
  "l-10": {
    animationDelay: ".45s"
  }
});

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.loading}>
        <div className={`${classes["l-1"]} ${classes.letter}`}>L</div>
        <div className={`${classes["l-2"]} ${classes.letter}`}>o</div>
        <div className={`${classes["l-3"]} ${classes.letter}`}>a</div>
        <div className={`${classes["l-4"]} ${classes.letter}`}>d</div>
        <div className={`${classes["l-5"]} ${classes.letter}`}>i</div>
        <div className={`${classes["l-6"]} ${classes.letter}`}>n</div>
        <div className={`${classes["l-7"]} ${classes.letter}`}>g</div>
        <div className={`${classes["l-8"]} ${classes.letter}`}>.</div>
        <div className={`${classes["l-9"]} ${classes.letter}`}>.</div>
        <div className={`${classes["l-10"]} ${classes.letter}`}>.</div>
      </div>
    </div>
  );
};

export default Loading;
