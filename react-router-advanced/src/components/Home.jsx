import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our React Router Advanced</h1>
      <p>
        This is the home page of our application 
      </p>
      <ul>
        <li>Nested Routes: Check out the Profile section</li>
        <li>Dynamic Routes:  Blog posts</li>
        <li>
          Protected Routes: Try accessing Profile before and after logging in
        </li>
      </ul>
    </div>
  );
};

export default Home