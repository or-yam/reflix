import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieCard.css';

export default function MovieCard(props) {
  const { movieData, updateRent } = props;
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
