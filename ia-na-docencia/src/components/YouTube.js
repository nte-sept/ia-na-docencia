import React from 'react';

export default function YouTubeVideo({ link }) {
  // Função que transforma o link normal no link de embed automaticamente
  let embedUrl = link;
  
  if (link.includes('watch?v=')) {
    const videoId = link.split('watch?v=')[1].split('&')[0];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  } else if (link.includes('youtu.be/')) {
    const videoId = link.split('youtu.be/')[1].split('?')[0];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  }

  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '56.25%', 
        height: 0,
        overflow: 'hidden',
        marginBottom: '24px',
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}
    >
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}