import { Component } from "react";
import { searchMovieList } from "../../store/actions/MovieListAction";
import { connect } from "react-redux";
class Search extends Component {
  searchResult = (event) => {
    this.props.searchMovieList(event.target.value);
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="search-box">
            <input
              type="text"
              className="search-input"
              placeholder="Search Movie..."
              onChange={this.searchResult}
            />
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

const mapStateToProps = (reducerObj) => {
  const allMovieList = reducerObj.movieList.allMovieList;
  return { allMovieList };
};

export default connect(mapStateToProps, {
  searchMovieList,
})(Search);
