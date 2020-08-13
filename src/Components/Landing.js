import React, { Component } from 'react';
import User from './UserCard';
import '../styles/Landing.css';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    const { users } = this.props;
    return (
      <>
        <nav className="navbar">
          <Link to="/">
            <img
              id="logo"
              src="https://brand.netflix.com/static/assets/icons/netflix_logo.svg"
              alt="logo"
            />
          </Link>
        </nav>
        <div className="title-container">
          <h1>Who's Watching ?</h1>
          <div className="users-container">
            {users.map((u) => (
              <User key={u.name} userData={u} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Landing;
