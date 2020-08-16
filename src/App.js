import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import movieCatalog from './data/MoviesCatalog';
import dummyUsers from './data/dummyUsers';
import Landing from './Components/Landing';
import Catalog from './Components/Catalog';
import MoviePage from './Components/MoviePage';

import './styles/App.css';

export default function App() {
  const RENT_PRICE = 7;
  const users = dummyUsers;
  const [currentUser, setCurrentUser] = useState({});
  const [moviesList, setMoviesList] = useState(movieCatalog);
  const [moviesRented, setMoviesRented] = useState([]);
  const [searchField, setSearchField] = useState('');

  const API_KEY = '22fc91e4eaa31cd6b9aaa5f3a542def7';
  const IMG_PREFIX = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2';

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    ).then((res) => {
      const list = res.data.results.map((m) => ({
        id: m.id,
        isRented: false,
        title: m.title,
        year: m.release_date,
        descrShort: m.overview,
        img: IMG_PREFIX + m.poster_path,
      }));
      setMoviesList(list);
    });
  }, []);

  const filteredMovies = moviesList.filter((movie) =>
    movie.title.toLowerCase().includes(searchField.toLocaleLowerCase())
  );

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const getCurrentUser = (id) => {
    const user = users.find((u) => u.id === id);
    setCurrentUser(user);
  };

  const updateBudget = (price) => {
    let user = { ...currentUser };
    user.budget += price;
    if (user.budget < 0) {
      alert(`im sorry im afraid i can't do that, GET MORE MONEY!`);
      return currentUser;
    } else {
      return user;
    }
  };

  const updateRentedList = (moviesArr) => moviesArr.map((m) => m.isRented && m);

  const updateState = (movieId) => {
    const updatedMovies = [...moviesList];
    const movieToUpdate = updatedMovies.find((m) => m.id === movieId);
    const updatedUser = updateBudget(
      movieToUpdate.isRented ? RENT_PRICE : -RENT_PRICE
    );

    movieToUpdate.isRented = !movieToUpdate.isRented;
    updatedMovies.map((m) => (m.id === movieId ? (m = movieToUpdate) : m));
    const rented = updateRentedList(updatedMovies);

    setMoviesList(updatedMovies);
    setMoviesRented(rented);
    setCurrentUser(updatedUser);
  };

  return (
    <Router>
      <Route
        path="/"
        exact
        render={({ match }) => (
          <Landing
            match={match}
            getCurrentUser={getCurrentUser}
            users={users}
          />
        )}
      />
      <Route
        path="/catalog"
        exact
        render={({ match }) => (
          <Catalog
            match={match}
            updateRent={updateState}
            onSearchChange={onSearchChange}
            user={currentUser}
            movies={filteredMovies}
            rented={moviesRented}
          />
        )}
      />
      <Route
        path="/catalog/:id"
        exact
        render={({ match }) => <MoviePage match={match} movies={moviesList} />}
      />
    </Router>
  );
}
