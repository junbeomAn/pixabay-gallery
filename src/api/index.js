import axios from "axios";
import { useEffect } from "react";

const API_KEY = "16002982-c89cb81fd9447437a061762cd";
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}`;

export const getImages = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getImagesByQuery = async (query, page = 1) => {
  let customUrl = BASE_URL;
  if (query) {
    customUrl = `${customUrl}&q=${encodeURIComponent(query)}&page=${page}`;
  }

  try {
    const { data } = await axios.get(`${customUrl}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getImagesByPage = async page => {
  let customUrl = BASE_URL;
  if (page) {
    customUrl = `${customUrl}&page=${page}`;
  }

  try {
    const { data } = await axios.get(`${customUrl}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const useIntersectionObserver = ({ target, callback, threshold }) => {
  useEffect(() => {
    if (!target) {
      return;
    }
    const observer = new IntersectionObserver(callback, {
      threshold
    });

    observer.observe(target);
    return () => {
      observer.unobserve(target);
    };
  }, [callback, target, threshold]);
};
