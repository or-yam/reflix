import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../styles/MovieCard.css';

export class MovieCard extends Component {
  render() {
    const { movieData } = this.props;
    return (
      <div className="movie-box">
        <Router>
          <Link to={`/catalog/${movieData.id}`}>
            <img src={movieData.img} alt="" />
          </Link>
          <button className="addRmvBtn">
            {movieData.isRented ? '-' : '+'}
          </button>
        </Router>
      </div>
    );
  }
}

export default MovieCard;
