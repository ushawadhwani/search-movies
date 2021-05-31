import { Component } from "react";
import { connect } from "react-redux";
import MoviewItem from "./MovieItem";

class MovieList extends Component {
  render() {
    const { movieList } = this.props;
    return (
      <>
        {movieList &&
          movieList.length > 0 &&
          movieList.map((item) => {
            return <MoviewItem movie={item} key={item.imdbID} />;
          })}
        {movieList.length === 0 &&
          "Please enter valid movie name in the search "}
      </>
    );
  }
}

const mapStateToProps = (reducerObj) => {
  const movieList = reducerObj.movieList.movieList;
  return { movieList };
};

export default connect(mapStateToProps, {})(MovieList);
