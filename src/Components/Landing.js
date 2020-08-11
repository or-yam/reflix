import React, { Component } from 'react';
import User from './UserCard';
import '../styles/Landing.css';
class Landing extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="users-container">
        {users.map((u) => (
          <User key={u.name} userData={u} />
        ))}
      </div>
    );
  }
}

export default Landing;
