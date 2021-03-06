import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/UserCard.css';

export default function UserCard({ userData, getCurrentUser }) {
  const upDateUser = () => {
    getCurrentUser(userData.id);
  };

  return (
    <div className="user-box">
      <Link to="/catalog" onClick={upDateUser}>
        <img src={userData.img} alt="img" />
        <h2>{userData.name}</h2>
        <h3>Budget: {userData.budget} $</h3>
      </Link>
    </div>
  );
}
