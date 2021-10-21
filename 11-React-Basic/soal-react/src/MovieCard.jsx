import React, { Component } from "react";
import data from "./dummy-data";

export default class MovieCard extends Component {
    constructor(props){
      super(props)
      this.state = {
        movie : "",       
      }
    }
    render() {
        return (
          <div class="card h-100">
            <img
              src={this.movie.image_url}
              class="card-img-top"
              alt="skilvul"
            />
            <div class="card-body">
              <h5 class="card-title">{this.movie.title}</h5>
              <h6 class="card-subtitle mb-2">
                <span class={`badge bg-danger`}>{this.movie.type}</span>
              </h6>
              <p class="card-text">
                Some quick example text to build on the card title and make
                up the bulk of the card's content.
              </p>
            </div>
            <div class="card-body">
              <a
                href={this.movie.url}
                class="btn btn-primary w-100 text-uppercase"
              >
                readmore
              </a>
            </div>
          </div>
        )
    }
}