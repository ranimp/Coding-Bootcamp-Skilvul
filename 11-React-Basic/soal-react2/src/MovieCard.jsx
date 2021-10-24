import React, { Component } from "react";
import data from "./dummy-data";

export default class MovieCard extends Component {
    render() {
      return (
        <div className ="row" id="daftar-anime">
          {data.map((movie, mal_id) =>
          <div className ="col-lg-3 col-md-4 col-sm-6">
            <div className="card" key={mal_id}>
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
        </div>
      )}}