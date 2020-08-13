import React, { Component } from 'react';
import '../styles/UserCard.css';
import { Link } from 'react-router-dom';

export class UserCard extends Component {
  render() {
    const { userData, updateCurrentUser } = this.props;
    const upDateUser = () => {
      updateCurrentUser(userData.id);
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
}

export default UserCard;
