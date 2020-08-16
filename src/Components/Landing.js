import React from 'react';
import { Link } from 'react-router-dom';
import User from './UserCard';
import '../styles/Landing.css';

export default function Landing(props) {
  const { users, getCurrentUser } = props;
  return (
    <div>
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
              getCurrentUser={getCurrentUser}
              userData={u}
            />
          ))}
        </div>
      </div>
    </div>
  );
}