import { Component } from "react";
import data from "./dummy-data";
import animeList from "./dummy-data";
import MovieCard from "./MovieCard";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movieList:[],
      isLoading: false
    }
    this.fetchMovieList = this.fetchMovieList.bind(this)
  }

  fetchMovieList = () => {
    const url = "https://api.jikan.moe/v3/top/anime";
    fetch(url)
    .then((response) => response.json())
    .then(data => {
      this.setState({
        movieList: data,
        isLoading : false,
      })
    })
  }

  componentDidMount(){
    this.fetchMovieList()
    setTimeout(() => {
      this.setState ({isLoading : true})
    },1000) 
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.movieList !== prevProps.movieList) {
      this.fetchMovieList(this.props.movieList);
    }
  }

  render() {
    const { movieList, isLoading } = this.state
    if(!isLoading) {
      return (
        <div className="container my-5">
          <h1 className="text-center">Anime List</h1>
          <h2>Loading...</h2>
        </div>
      )
    }
    return (
        <div className="container my-5">
          <h1 className="text-center">Anime List</h1>
          <div className="container my-5">  
           <MovieCard movie = {data}></MovieCard>
            {/* <div className ="row" id="daftar-anime">
            {movieList.map((movie, mal_id) =>
              <div className ="col-lg-3 col-md-4 col-sm-6">
                <div className="card" key={mal_id} >
                  <img
                    src={movie.image_url}
                    className="card-img-top"
                    alt="skilvul"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <h6 className="card-subtitle mb-2">
                      <span className={`badge bg-danger`}>{movie.type}</span>
                    </h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </p>
                  </div>
                  <div className="card-body">
                    <a
                      href={movie.url}
                      className="btn btn-primary w-100 text-uppercase"
                    >
                      readmore
                    </a>
                  </div>
                </div>  
              </div>)}
            </div> */}
          </div>
        </div>
      )}}

export default App;