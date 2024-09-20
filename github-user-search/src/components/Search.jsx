// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [query, setQuery] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);  // Reset error before the search
    setUserData(null); // Clear previous user data

    try {
      const data = await fetchUserData(query);
      setUserData(data);  // Set the fetched data
    } catch (err) {
      setError(true);     // Set error state if something goes wrong
    } finally {
      setLoading(false);  // Stop loading regardless of success or failure
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering based on loading and error states */}
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user</p>}

      {/* Display the fetched user data if available */}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="150" />
          <h2>{userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
