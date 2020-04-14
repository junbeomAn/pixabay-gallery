import React, { useRef, useEffect, useState } from "react";
import { GridList, makeStyles, GridListTile } from "@material-ui/core";
import Loading from "./../Loading/Loading";
import {
  getImages,
  getImagesByQuery,
  useIntersectionObserver,
  getImagesByPage
} from "./../api/index";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  gridList: {
    width: 800,
    height: 500
  },
  grid: {
    overflow: "hidden",
    transition: "all .2s ease",
    "&:hover": {
      transform: "scale(0.98)",
      opacity: "0.9"
    }
  }
}));

const Gallery = ({ query, handleImageClick }) => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [, setError] = useState("");
  const [target, setTarget] = useState(null);

  const classes = useStyles();
  const currentPage = useRef(1);

  useIntersectionObserver({
    target: target,
    threshold: 0.5,
    callback: (entries, observer) => {
      entries.forEach(entry => {
        console.log(entry);
        if (entry.intersectionRatio <= 0 || loading || noResults) {
          // observer.unobserve(entry.target);
          return;
        }
        getMoreImage();
      });
    }
  });

  const getMoreImage = async () => {
    setLoading(true);
    try {
      let data = null;
      if (query) {
        data = await getImagesByQuery(query, currentPage.current + 1);
      } else {
        data = await getImagesByPage(currentPage.current + 1);
      }
      if (data.hits.length > 0) {
        setImages([...images, ...data.hits]);
        currentPage.current++;
      } else {
        setNoResults(true);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const getRandomImages = async () => {
    try {
      setNoResults(false);
      setLoading(true);
      const { hits } = await getImages({});
      setImages(hits);
      if (hits.length === 0) {
        setNoResults(true);
      }
    } catch (err) {
      console.log("error!!!!!!");
    } finally {
      setLoading(false);
    }
  };

  const searchImages = async query => {
    try {
      setNoResults(false);
      setLoading(true);
      const { hits } = await getImagesByQuery(query);
      setImages(hits);
      if (hits.length === 0) {
        setNoResults(true);
      }
    } catch (err) {
      console.log("error!!!!!!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      searchImages(query);
    } else {
      getRandomImages();
    }
    currentPage.current = 1;
  }, [query]);

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={4} cellHeight={160}>
        {images.map(({ id, webformatURL, largeImageURL, type }) => (
          <GridListTile key={id} className={classes.grid}>
            <img
              src={webformatURL}
              data-showurl={largeImageURL}
              alt={type}
              onClick={e => handleImageClick(e)}
            />
          </GridListTile>
        ))}
        {loading ? (
          <Loading />
        ) : noResults && !images.length ? (
          <div>검색결과가 없습니다</div>
        ) : null}
        <div ref={setTarget} style={{ height: "60px" }} />
      </GridList>
    </div>
  );
};
export default Gallery;
