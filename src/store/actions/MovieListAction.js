import axios from "axios";
//HC imports
import { createPlatformURL } from "../../utils/apiUtils";

/** Action Types */
export const GET_MOVIE_LIST = "get-movie-list";
export const UPDATE_MOVIE_LIST = "update-movie-list";
/**
 * Load Movie List
 */
export const loadMovieList = (callback) => {
  let url = createPlatformURL(); //here we can concat our other apis as well for now nothing is there
  return (dispatch) => {
    //loader can be called here
    axios
      .get(url)
      .then((res) => {
        callback && callback();
        dispatch(getMovieList([res.data]));
        //loader can be stoped here
      })
      .catch((error) => {
        callback && callback(error);
      });
  };
};
export const searchMovieList = (search, callback) => {
  if (search && search !== "") {
    let url = createPlatformURL(search); //here we can concat our other apis as well for now nothing is there
    return (dispatch) => {
      //loader can be called here
      axios
        .get(url)
        .then((res) => {
          if (res.data.Response === "True") {
            dispatch(getMovieList([res.data]));
          } else {
            dispatch(getMovieList([]));
          }

          //loader can be stoped here
        })
        .catch((error) => {
          callback && callback(error);
        });
    };
  } else {
    return (dispatch) => {
      dispatch(updateMovieList([]));
    };
  }
  // return (dispatch) => {
  //   dispatch(updateMovieList(dataList));
  // };
};

export const getMovieList = (data, value) => {
  return {
    type: GET_MOVIE_LIST,
    payload: data,
    value,
  };
};
export const updateMovieList = (data, value) => {
  return {
    type: UPDATE_MOVIE_LIST,
    payload: data,
    value,
  };
};
