import { GET_MOVIE_LIST } from "../actions/MovieListAction";
import { UPDATE_MOVIE_LIST } from "../actions/MovieListAction";

export const INITIAL_STATE = {
  movieList: [],
  allMovieList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MOVIE_LIST:
      return {
        ...state,
        movieList: action.payload,
        allMovieList: action.payload,
      };
    case UPDATE_MOVIE_LIST:
      return {
        ...state,
        movieList: action.payload,
      };
    default:
      return state;
  }
};
