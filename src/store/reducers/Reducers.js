import { combineReducers } from "redux";
import MovieListReducer from "./MovieReducer";

export const reducers = combineReducers({
  movieList: MovieListReducer,
});
