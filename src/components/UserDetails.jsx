import React from 'react';
import PropTypes from 'prop-types';

function UserDetails({ user, repos, onReset }) {
  return (
    <div>
      <img src={user.avatar_url} alt="User Avatar" />
      <h2>{user.name}</h2>
      <p>Location: {user.location}</p>
      <p>Bio: {user.bio}</p>
      <h3>Repositories:</h3>
      {Array.isArray(repos) && repos.length > 0 ? (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      ) : (
        <p>No repositories found.</p>
      )}
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default UserDetails;
