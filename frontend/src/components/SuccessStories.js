import React from 'react';
import './SuccessStories.css'; // We will create this file next

function SuccessStories() {
  return (
    <section className="stories-section">
      <h2>Success Stories</h2>
      <div className="story-card">
        <img 
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
          alt="Story beneficiary" 
          className="story-image"
        />
        <div className="story-content">
          <blockquote>
            "Thanks to Rise-and-Shine NGO, I was able to complete my education. 
            I am now the first engineer from my village and can support my entire family. 
            They truly create opportunities."
          </blockquote>
          <cite>— Priya, Education Program Graduate</cite>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;