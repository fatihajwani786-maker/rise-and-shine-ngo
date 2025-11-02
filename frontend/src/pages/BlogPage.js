import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css'; // We'll create this

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch posts from your Django API
    // We use the environment variable for the API URL
    const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

    fetch(`${apiUrl}/api/posts/`)
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      });
  }, []); // The empty array [] means this runs once when the page loads

  return (
    <main className="blog-page">
      <h2>Our Blog</h2>
      <p>Read about our latest news, project updates, and success stories.</p>

      <div className="blog-grid">
        {loading && <p>Loading posts...</p>}

        {!loading && posts.length === 0 && <p>No blog posts found.</p>}

        {posts.map(post => (
          <div className="blog-card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 150)}...</p> {/* Show a preview */}
            {/* We can make this link go to a single post page later */}
            <Link to={`/blog/${post.id}`}>Read More &rarr;</Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default BlogPage;