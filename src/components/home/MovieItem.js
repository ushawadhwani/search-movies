function MovieItem({ movie }) {
  return (
    <div className="row mt-5">
      <div className="col-md-2">
        <img src={movie.Poster} className="movie_poster" alt="" />
      </div>
      <div className="col-md-10">
        <p className="poster_title">
          Title: <span>{movie.Title}</span>
        </p>
        <p className="poster_title">
          Year: <span>{movie.Year}</span>
        </p>
        <p className="poster_title">
          Runtime: <span>{movie.Runtime}</span>
        </p>
        <p className="poster_title">
          Plot: <span>{movie.Plot}</span>
        </p>
      </div>
    </div>
  );
}

export default MovieItem;
