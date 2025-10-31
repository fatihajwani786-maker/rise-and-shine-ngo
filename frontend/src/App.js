import React, { useState, useEffect } from 'react'; // Import React's tools
import './App.css';

function App() {
  // 1. Create a "state" to hold our list of posts
  // It starts as an empty list: []
  const [posts, setPosts] = useState([]);

  // 2. This 'useEffect' hook runs once when the component loads
  useEffect(() => {
    // 3. We use 'fetch' to make the "phone call" to our Django API
    fetch('http://127.0.0.1:8000/api/posts/')
      .then(response => response.json()) // 4. Convert the response to JSON
      .then(data => setPosts(data))      // 5. Put the JSON data into our 'posts' state
      .catch(error => console.error('Error fetching posts:', error)); // 6. (Good practice) Log any errors
  }, []); // The empty [] means "only run this one time"

  // 7. This is what React will draw on the screen
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Rise-and-Shine NGO</h1>
        <h2>Our Blog</h2>
      </header>
      <main>
        {/* 8. We "map" over the list of posts and create HTML for each one */}
        {posts.map(post => (
          // 9. 'key' is a special React prop for lists
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;