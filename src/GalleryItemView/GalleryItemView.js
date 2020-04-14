import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0, 0.6)",
    position: "absolute",
    top: 0,
    left: 0
  },
  view: {
    minWidth: 600,
    minHeight: 400,
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  menu: {
    backgroundColor: "white",
    borderBottom: "1px solid #5a5a5a",
    width: "90%",
    padding: "10px",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "10px"
  },
  image: {
    width: 580
  },
  button: {
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "5px",
    padding: "2px 5px",
    "&:hover": {
      boxShadow: "1px 1px 3px #a9a9a9, 1px 1px 3px #a9a9a9"
    }
  }
}));

const GalleryItemView = ({ imageUrl, handleModalClose }) => {
  const classes = useStyles();

  const onBackgroundClick = e => {
    if (e.target.id === "preview-container") {
      handleModalClose();
    }
  };

  return (
    <div
      className={classes.container}
      id="preview-container"
      onClick={e => onBackgroundClick(e)}
    >
      <div className={classes.view}>
        <div className={classes.menu}>
          <button className={classes.button} onClick={() => handleModalClose()}>
            X
          </button>
        </div>
        <div>
          <img src={imageUrl} className={classes.image} alt="view" />
        </div>
      </div>
    </div>
  );
};

export default GalleryItemView;
