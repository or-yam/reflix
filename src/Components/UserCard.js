import React, { Component } from 'react';
import '../styles/UserCard.css';

export class UserCard extends Component {
  render() {
    const { userData } = this.props;
    return (
      <div className="user-box">
        <h2>{userData.name}</h2>
        <h3>Budget: {userData.budget} $</h3>
        <img src={userData.img} alt="img" />
      </div>
    );
  }
}

export default UserCard;
