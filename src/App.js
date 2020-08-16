import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import movieCatalog from './data/MoviesCatalog';
import dummyUsers from './data/dummyUsers';

import Landing from './Components/Landing';
import Catalog from './Components/Catalog';
import MoviePage from './Components/MoviePage';

import './styles/App.css';

export default function App() {
  const [users, setUsers] = useState(dummyUsers);
  const [currentUser, setCurrentUser] = useState({});
  const [moviesList, setMoviesList] = useState(movieCatalog);
  const [searchField, setSearchField] = useState('');
  const [moviesRented, setMoviesRented] = useState([]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const updateCurrentUser = (id) => {
    const user = users.find((u) => u.id === id);
    setCurrentUser(user);
  };

  const updateBudget = (price) => {
    let user = { ...currentUser };
    user.budget = user.budget += price;
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
    const updatedUser = updateBudget(movieToUpdate.isRented ? 7 : -7);

    if (updatedUser.budget !== currentUser.budget) {
      movieToUpdate.isRented = !movieToUpdate.isRented;
      updatedMovies.map((m) => (m.id === movieId ? (m = movieToUpdate) : m));
      const rented = updateRentedList(updatedMovies);

      setMoviesList(updatedMovies);
      setMoviesRented(rented);
      setCurrentUser(updatedUser);
    }
  };

  const filteredMovies = moviesList.filter((movie) =>
    movie.title.toLowerCase().includes(searchField.toLocaleLowerCase())
  );

  return (
    <Router>
      <Route
        path="/"
        exact
        render={({ match }) => (
          <Landing
            match={match}
            updateCurrentUser={updateCurrentUser}
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

/*
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: dummyUsers,
      currentUser: {},
      moviesList: movieCatalog,
      searchField: '',
      moviesRented: [],
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  updateCurrentUser = (id) => {
    const user = this.state.users.find((u) => u.id === id);
    this.setState({ currentUser: user });
  };

  updateBudget = (price) => {
    let user = { ...this.state.currentUser };
    user.budget = user.budget += price;
    if (user.budget < 0) {
      alert(`im sorry im afraid i can't do that, GET MORE MONEY!`);
      return this.state.currentUser;
    } else {
      return user;
    }
  };

  updateRentedList = (moviesArr) => moviesArr.map((m) => m.isRented && m);

  updateState = (movieId) => {
    const updatedMovies = [...this.state.moviesList];
    const movieToUpdate = updatedMovies.find((m) => m.id === movieId);
    const updatedUser = this.updateBudget(movieToUpdate.isRented ? 7 : -7);

    if (updatedUser.budget !== this.state.currentUser.budget) {
      movieToUpdate.isRented = !movieToUpdate.isRented;
      updatedMovies.map((m) => (m.id === movieId ? (m = movieToUpdate) : m));
      const rented = this.updateRentedList(updatedMovies);

      this.setState({
        moviesList: updatedMovies,
        moviesRented: rented,
        currentUser: updatedUser,
      });
    }
  };

  render() {
    const { state } = this;
    const filteredMovies = state.moviesList.filter((movie) =>
      movie.title.toLowerCase().includes(state.searchField.toLocaleLowerCase())
    );

    return (
      <Router>
        <Route
          path="/"
          exact
          render={({ match }) => (
            <Landing
              match={match}
              updateCurrentUser={this.updateCurrentUser}
              users={state.users}
            />
          )}
        />
        <Route
          path="/catalog"
          exact
          render={({ match }) => (
            <Catalog
              match={match}
              updateRent={this.updateState}
              onSearchChange={this.onSearchChange}
              user={state.currentUser}
              movies={filteredMovies}
              rented={state.moviesRented}
            />
          )}
        />
        <Route
          path="/catalog/:id"
          exact
          render={({ match }) => (
            <MoviePage match={match} movies={state.moviesList} />
          )}
        />
      </Router>
    );
  }
}

export default App;
*/
