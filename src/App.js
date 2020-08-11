import React, { Component } from 'react';
import './styles/App.css';
import movieCatalog from '../data/MoviesCatalog';
import dummyUsers from '../data/dummyUsers';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from './Components/Landing';
import Catalog from './Components/Catalog';
import MoviePage from './Components/MoviePage';
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: dummyUsers,
      currentUser: dummyUsers[0],
      moviesList: movieCatalog,
      searchField: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  updateRent = (id) => {
    const toUpdate = this.state.moviesList.find((m) => m.id === id).isRented;
    toUpdate = !toUpdate;
    // this.setState(moviesList: moviesCatalog.find((m) => m.id === id).isRented)
  };

  render() {
    const { state } = this;
    const filteredMovies = state.moviesList.filter((movie) =>
      movie.title.toLowerCase().includes(state.searchField.toLocaleLowerCase())
    );

    return (
      <>
        <Router>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/">Reflix</Link>
          </nav>
          <Route
            path="/"
            exact
            render={({ match }) => (
              <Landing match={match} users={state.users} />
            )}
          />
          <Route
            path="/catalog"
            exact
            render={({ match }) => (
              <Catalog
                match={match}
                onSearchChange={this.onSearchChange}
                user={state.currentUser}
                movies={filteredMovies}
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
      </>
    );
  }
}

export default App;
