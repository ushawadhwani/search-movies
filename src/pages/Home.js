import "../assets/css/home.css";
import Search from "../components/common/Search";
import Header from "../components/common/Header";
import MovieList from "../components/home/MovieList";

function Home() {
  return (
    <div className="container p-4">
      <div className="page_border">
        <Header />
        <Search />
        <MovieList />
      </div>
    </div>
  );
}

export default Home;
