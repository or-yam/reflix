import React from 'react';
import '../styles/MoviePage.css';
import { Link, Redirect } from 'react-router-dom';

export default function MoviePage({ match, movies }) {
  const { id } = match.params;
  const movieData = movies.find(m => m.id === parseInt(id));

  if (!movieData) {
    return <Redirect to="/" />;
  }

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
