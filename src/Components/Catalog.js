import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import '../styles/Catalog.css';

export default function Catalog(props) {
  const { movies, rented, user, onSearchChange, updateRent } = props;

  return (
    <div>
      <div className="catalog-container">
        <nav className="search-nav">
          <Link to="/">
            <img
              id="logo"
              src="https://brand.netflix.com/static/assets/icons/netflix_logo.svg"
              alt="logo"
            />
          </Link>
          <input
            type="search"
            placeholder="Search for title..."
            id="search-input"
            onChange={onSearchChange}
          />
          <div className="user-budget">
            <img src={user.img} alt="user" />
            <span>{user.name}</span>
            <span>Budget: {user.budget}$</span>
          </div>
        </nav>

        <div className="rented-container">
          {rented.length ? <h3>Rented</h3> : null}
          <div className="movies-container">
            {rented.map((m) =>
              m ? (
                <MovieCard key={m.id} updateRent={updateRent} movieData={m} />
              ) : null
            )}
          </div>
        </div>

        <div className="catalog-container">
          <h3>Catalog</h3>
          <div className="movies-container">
            {movies.map((m) => (
              <MovieCard
                key={m.id}
                updateRent={updateRent}
                movieData={m}
                user={user}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/*
export default class Catalog extends Component {
  render() {
    const { movies, rented, user, onSearchChange, updateRent } = this.props;

    return (
      <div className="catalog-container">
        <nav className="search-nav">
          <Link to="/">
            <img
              id="logo"
              src="https://brand.netflix.com/static/assets/icons/netflix_logo.svg"
              alt="logo"
            />
          </Link>
          <input
            type="search"
            placeholder="Search for title..."
            id="search-input"
            onChange={onSearchChange}
          />
          <div className="user-budget">
            <img src={user.img} alt="user" />
            <span>{user.name}</span>
            <span>Budget: {user.budget}$</span>
          </div>
        </nav>

        <div className="rented-container">
          {rented.length ? <h3>Rented</h3> : null}
          <div className="movies-container">
            {rented.map((m) =>
              m ? (
                <MovieCard key={m.id} updateRent={updateRent} movieData={m} />
              ) : null
            )}
          </div>
        </div>

        <div className="catalog-container">
          <h3>Catalog</h3>
          <div className="movies-container">
            {movies.map((m) => (
              <MovieCard
                key={m.id}
                updateRent={updateRent}
                movieData={m}
                user={this.props.user}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
*/
