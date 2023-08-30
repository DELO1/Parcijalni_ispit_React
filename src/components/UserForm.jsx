import React, { useState } from 'react';

function UserForm({ onUserSubmit }) {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUserSubmit(username);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleUsernameChange}
        />
        <button type="submit">Show Details</button>
      </form>
    </div>
  );
}

export default UserForm;
