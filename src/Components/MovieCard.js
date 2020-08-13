import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieCard.css';

export class MovieCard extends Component {
  render() {
    const { movieData, updateRent } = this.props;
    const updateData = () => {
      updateRent(movieData.id);
    };

    return (
      <div className="movie-box">
        <Link to={`/catalog/${movieData.id}`}>
          <img src={movieData.img} alt="movieImg" />
        </Link>
        <button onClick={updateData} className="addRmvBtn">
          {movieData.isRented ? '-' : '+'}
        </button>
      </div>
    );
  }
}

export default MovieCard;
