import React, { Component } from 'react';
import MovieCard from './MovieCard';
import '../styles/Catalog.css';

export default class Catalog extends Component {
  render() {
    const { movies, user, onSearchChange } = this.props;
    return (
      <div className="catalog-container">
        <nav className="search-nav">
          <input
            type="search"
            placeholder="Search"
            id="search-input"
            onChange={onSearchChange}
          />
          <div className="user-budget">
            Hello {user.name}, Your Budget: {user.budget}$
          </div>
        </nav>
        <div className="movies-container">
          {movies.map((m) => (
            <MovieCard key={m.id} movieData={m} />
          ))}
        </div>
      </div>
    );
  }
}
