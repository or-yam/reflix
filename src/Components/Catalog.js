import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import MovieCard from './MovieCard';
import '../styles/Catalog.css';

export default function Catalog({ movies, rented, user, onSearchChange, updateRent }) {
  const { img, name, budget } = user;

  if (!user.id) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div className="catalog-container">
        <nav className="search-nav">
          <Link to="/">
            <img id="logo" src="https://brand.netflix.com/static/assets/icons/netflix_logo.svg" alt="logo" />
          </Link>
          <input type="search" placeholder="Search for title..." id="search-input" onChange={onSearchChange} />
          <div className="user-budget">
            <img src={img} alt="user" />
            <span>{name}</span>
            <span>Budget: {budget}$</span>
          </div>
        </nav>

        <div className="rented-container">
          {rented.length > 0 && <h3>Rented</h3>}
          <div className="movies-container">
            {rented.map(movie => movie && <MovieCard key={movie.id} updateRent={updateRent} movieData={movie} />)}
          </div>
        </div>

        <div className="catalog-container">
          <h3>Catalog</h3>
          <div className="movies-container">
            {movies.map(movie => (
              <MovieCard key={movie.id} updateRent={updateRent} movieData={movie} user={user} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
