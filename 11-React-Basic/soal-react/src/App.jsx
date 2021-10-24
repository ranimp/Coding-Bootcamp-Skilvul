import { Component } from "react";
import data from "./dummy-data";
import animeList from "./dummy-data";
import MovieCard from "./MovieCard";

class App extends Component {
  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
          <MovieCard movie = {data}/>
        </div>
      </div>
    );
  }
}

export default App;