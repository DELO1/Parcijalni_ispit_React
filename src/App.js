import React, { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleUserSubmit = async (username) => {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userResponse.json();

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      if (reposResponse.ok) {
        const reposData = await reposResponse.json();
        setUser(userData);
        setRepos(reposData);
      } else {
        console.error('Error fetching repositories:', reposResponse.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleReset = () => {
    setUser(null);
    setRepos([]);
  };

  return (
    <div className="App">
      <h1>GitHub User Details</h1>
      {user ? (
        <UserDetails user={user} repos={repos} onReset={handleReset} />
      ) : (
        <UserForm onUserSubmit={handleUserSubmit} />
      )}
    </div>
  );
}

export default App;
