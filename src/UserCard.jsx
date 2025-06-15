import React from 'react';
import './UserCard.css';

function UserCard({ user }) {
  return (
    <div className={`user-card ${user.active ? 'active' : 'inactive'}`}>
      <img src={user.avatar} alt={user.name} className="avatar" />
      <h2>{user.name}</h2>
      <p>Возраст: {user.age}</p>
      <p>Город: {user.city}</p>
      {user.active && <span className="status">✅ Активен</span>}
    </div>
  );
}

export default UserCard;
