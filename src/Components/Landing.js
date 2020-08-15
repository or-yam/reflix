import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import User from './UserCard';
import '../styles/Landing.css';

class Landing extends Component {
  render() {
    const { users, updateCurrentUser } = this.props;

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
              <User
                key={u.name}
                updateCurrentUser={updateCurrentUser}
                userData={u}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Landing;
