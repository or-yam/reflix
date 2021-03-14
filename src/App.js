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
  const IMG_PREFIX = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2';
  const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`;

  const users = dummyUsers;
  const [currentUser, setCurrentUser] = useState({});
  const [moviesList, setMoviesList] = useState(movieCatalog);
  const [moviesRented, setMoviesRented] = useState([]);
  const [searchField, setSearchField] = useState('');

  const getMovies = async () => {
    const { results } = await (await axios(API_URL)).data;
    return results.map(({ id, title, release_date, overview, poster_path }) => ({
      id,
      isRented: false,
      title,
      year: release_date,
      descrShort: overview,
      img: IMG_PREFIX + poster_path
    }));
  };

  useEffect(() => {
    (async () => {
      const movies = await getMovies();
      setMoviesList(movies);
    })();
    return () => setMoviesList(movieCatalog);
  }, []);

  const filteredMovies = moviesList.filter(({ title }) =>
    title.toLowerCase().includes(searchField.toLocaleLowerCase())
  );

  const onSearchChange = ({ target }) => {
    setSearchField(target.value);
  };

  const getCurrentUser = id => {
    const user = users.find(user => user.id === id);
    setCurrentUser(user);
  };

  const updateBudget = price => {
    let user = { ...currentUser };
    user.budget += price;
    if (user.budget < 0) {
      alert(`im sorry im afraid i can't do that, GET MORE MONEY!`);
      return currentUser;
    }
    return user;
  };

  const updateRentedList = moviesArr => moviesArr.map(m => m.isRented && m);

  const updateState = movieId => {
    const updatedMovies = [...moviesList];
    const movieToUpdate = updatedMovies.find(m => m.id === movieId);
    const updatedUser = updateBudget(movieToUpdate.isRented ? RENT_PRICE : -RENT_PRICE);

    movieToUpdate.isRented = !movieToUpdate.isRented;
    updatedMovies.map(m => (m.id === movieId ? (m = movieToUpdate) : m));
    const rented = updateRentedList(updatedMovies);

    setMoviesList(updatedMovies);
    setMoviesRented(rented);
    setCurrentUser(updatedUser);
  };

  return (
    <Router>
      <Route path="/" exact render={() => <Landing getCurrentUser={getCurrentUser} users={users} />} />
      <Route
        path="/catalog"
        exact
        render={() => (
          <Catalog
            updateRent={updateState}
            onSearchChange={onSearchChange}
            user={currentUser}
            movies={filteredMovies}
            rented={moviesRented}
          />
        )}
      />
      <Route path="/catalog/:id" exact render={({ match }) => <MoviePage match={match} movies={moviesList} />} />
    </Router>
  );
}
