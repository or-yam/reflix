import React, { Component } from 'react';
import '../styles/MoviePage.css'

export class MoviePage extends Component {
  render() {
    const movieID = this.props.match.params.id;
    const movieData = this.props.movies.find((m) => m.id == movieID);

    return (
      <div className='movie-page'>
        <h1>
          {movieData.title} ({movieData.year})
        </h1>
        <img src={movieData.img} alt="title" />
        <p className='about'>{movieData.descrShort}</p>
      </div>
    );
  }
}

export default MoviePage;
