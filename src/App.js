import React, { useState } from "react";

import SearchBar from "./SearchBar/SearchBar";
import { Container, makeStyles } from "@material-ui/core";
import Gallery from "./Gallery/Gallery";
import GalleryItemView from "./GalleryItemView/GalleryItemView";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0
  }
}));

function App() {
  const [query, setQuery] = useState("");
  const [showImageUrl, setShowImageUrl] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const classes = useStyles();

  const handleImageClick = e => {
    const { showurl } = e.target.dataset;
    setShowImageUrl(showurl);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <Container maxWidth="xl" className={classes.root}>
      <SearchBar setQuery={setQuery} />
      <Gallery query={query} handleImageClick={handleImageClick} />
      {openModal && (
        <GalleryItemView
          imageUrl={showImageUrl}
          handleModalClose={handleModalClose}
        />
      )}
    </Container>
  );
}
export default App;
