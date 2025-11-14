import React, { useState, useEffect } from 'react';
import './MediaPage.css'; // We'll update this CSS file

// Helper function to get a YouTube embed URL
const getYouTubeEmbedUrl = (url) => {
  try {
    const videoId = new URL(url).searchParams.get('v');
    return `https://www.youtube.com/embed/${videoId}`;
  } catch (e) {
    return null;
  }
};

function MediaPage() {
  // Create state for both kinds of content
  const [pageContent, setPageContent] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

  useEffect(() => {
    async function fetchMediaData() {
      try {
        // Fetch both sets of data at the same time
        const [contentResponse, itemsResponse] = await Promise.all([
          fetch(`${apiUrl}/api/gallery/page-content/`),
          fetch(`${apiUrl}/api/gallery/`)
        ]);

        const contentData = await contentResponse.json();
        const itemsData = await itemsResponse.json();

        setPageContent(contentData);
        setGalleryItems(itemsData);

      } catch (error) {
        console.error('Error fetching media data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchMediaData();
  }, [apiUrl]);

  if (loading) {
    return <main className="media-page"><h2>Loading media...</h2></main>;
  }

  // We need pageContent to exist to render the text
  if (!pageContent) {
    return <main className="media-page"><h2>Error loading content.</h2></main>;
  }

  return (
    <main className="media-page">
      {/* --- New Dynamic Introduction --- */}
      <section className="media-intro">
        <h2>{pageContent.introduction_text || 'Media Gallery'}</h2>
        <p>See our mission in action. Here are photos and videos from our events and field work.</p>
      </section>

      {/* --- Gallery & Video Section --- */}
      <div className="media-grid">
        {galleryItems.map(item => {
          const embedUrl = item.video_url ? getYouTubeEmbedUrl(item.video_url) : null;
          return (
            <div className="media-item" key={item.id}>
              {embedUrl ? (
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
                <img src={item.image} alt={item.title} />
              )}
              <div className="media-caption">{item.title}</div>
            </div>
          );
        })}
      </div>

      {/* --- New Dynamic Text Sections --- */}
      <div className="media-text-sections">
        <section>
          <h3>Press Releases</h3>
          <p>{pageContent.press_releases_text}</p>
        </section>

        <section>
          <h3>Media Coverage</h3>
          <p>{pageContent.media_coverage_text}</p>
        </section>

        <section>
          <h3>Contact for Media</h3>
          <p>{pageContent.contact_for_media_text}</p>
        </section>
      </div>
    </main>
  );
}

export default MediaPage;