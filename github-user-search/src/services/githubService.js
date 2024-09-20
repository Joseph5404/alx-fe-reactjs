// src/services/githubService.js
import axios from 'axios';

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);

  if (response.status === 404) {
    throw new Error('User not found');
  }

  return response.data;
};
