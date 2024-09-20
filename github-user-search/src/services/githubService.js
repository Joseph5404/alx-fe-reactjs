// src/services/githubService.js
import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Return user data if successful
  } catch (err) {
    throw new Error('User not found'); // Throw an error if user is not found
  }
};
