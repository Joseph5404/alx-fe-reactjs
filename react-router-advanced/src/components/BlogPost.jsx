import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function BlogPost() {
  let { postId } = useParams();
  return <div>Blog Post {postId}</div>;
}

function Blog() {
  return (
    <div>
      <h2>Blog</h2>
      <Routes>
        <Route path=":postId" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default Blog;