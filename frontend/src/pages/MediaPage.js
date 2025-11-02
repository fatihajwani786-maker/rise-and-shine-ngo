import React from 'react';
import './MediaPage.css'; // We'll create this file next

function MediaPage() {
  // This data would ideally come from your Django API
  const gallery = [
    { id: 1, type: 'photo', url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400', caption: 'Community food drive' },
    { id: 2, type: 'photo', url: 'https://images.unsplash.com/photo-1488521787991-ed7b2f28a727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400', caption: 'Children in our classroom' },
    { id: 3, type: 'photo', url: 'https://images.unsplash.com/photo-1617454093847-a8f8d3c13e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400', caption: 'Vocational training session' },
    { id: 4, type: 'photo', url: 'https://images.unsplash.com/photo-1599059813005-2a40f850a5f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400', caption: 'Clean water project' },
  ];

  return (
    <main className="media-page">
      <h2>Media Gallery</h2>
      <p>See our mission in action. Here are photos and videos from our events and field work.</p>

      <div className="media-grid">
        {gallery.map(item => (
          <div className="media-item" key={item.id}>
            <img src={item.url} alt={item.caption} />
            <div className="media-caption">{item.caption}</div>
          </div>
        ))}
      </div>

      {/* We can add a video section later */}
      {/* <h3>Videos</h3> */}

    </main>
  );
}

export default MediaPage;