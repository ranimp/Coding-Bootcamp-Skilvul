import { Component } from "react";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movieList:[],
      isLoading: false
    }
  }

  fetchMovieList = () => {
    const url = "https://api.jikan.moe/v3/top/anime";
    fetch(url)
    .then((response) => response.json())
    .then(data => {
      this.setState({
        movieList: data.top,
      })
    })
  }

  componentDidMount(){
    this.fetchMovieList() 
  }
  
  componentDidUpdate(prevProps) {
    if (this.state.movieList !== prevProps.movieList) {
      setTimeout(() => {
        this.setState ({isLoading : true})
      },1000)
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
            <div className ="row" id="daftar-anime">
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
                      <span className={`badge ${movie.type === "TV" ? 'bg-danger' : 'bg-success'}`}>{movie.type}</span>
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
            </div>
          </div>
        </div>
      )}}

export default App;