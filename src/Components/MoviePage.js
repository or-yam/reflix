import React from 'react';
import '../styles/MoviePage.css';
import { Link } from 'react-router-dom';

export default function MoviePage(props) {
  const movieID = props.match.params.id;
  const movieData = props.movies.find((m) => m.id === parseInt(movieID));

  return (
    <div className="movie-page">
      <h1>
        {movieData.title} ({movieData.year})
      </h1>
      <img src={movieData.img} alt="title" />
      <p className="about">{movieData.descrShort}</p>
      <Link to="/catalog">
        <span className="backBtn">Back to catalog</span>
      </Link>
    </div>
  );
}
