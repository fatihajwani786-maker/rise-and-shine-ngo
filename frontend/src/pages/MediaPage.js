import React, { useState, useEffect } from 'react';
import './MediaPage.css'; // We'll update this CSS

// A helper function to get a YouTube embed URL
const getYouTubeEmbedUrl = (url) => {
  try {
    const videoId = new URL(url).searchParams.get('v');
    return `https://www.youtube.com/embed/${videoId}`;
  } catch (e) {
    return null; // Invalid URL
  }
};

function MediaPage() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

  useEffect(() => {
    async function fetchGallery() {
      try {
        const response = await fetch(`${apiUrl}/api/gallery/`);
        const data = await response.json();
        setGalleryItems(data);
      } catch (error) {
        console.error('Error fetching gallery items:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, [apiUrl]);

  if (loading) {
    return <main className="media-page"><h2>Loading gallery...</h2></main>;
  }

  return (
    <main className="media-page">
      <h2>Media Gallery</h2>
      <p>See our mission in action. Here are photos and videos from our events and field work.</p>

      <div className="media-grid">

        {/* Map over the items from the API */}
        {galleryItems.map(item => {
          const embedUrl = item.video_url ? getYouTubeEmbedUrl(item.video_url) : null;

          return (
            <div className="media-item" key={item.id}>
              {embedUrl ? (
                // If it's a video, show an iframe
                <div className="video-container">
                  <iframe
                    src={embedUrl}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                // If it's just an image, show the image
                <img src={item.image} alt={item.title} />
              )}
              <div className="media-caption">{item.title}</div>
            </div>
          );
        })}

        {!loading && galleryItems.length === 0 && (
          <p>No gallery items found. Please check back later!</p>
        )}

      </div>
    </main>
  );
}

export default MediaPage;