import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

function CardItem({ item }) {
  const imageUrl = useBaseUrl(item.image); 
  
  return (
    <Link to={item.link} className="ia-card">
      <div className="ia-card-image">
        <img src={imageUrl} alt={item.title} />
      </div>
      <div className="ia-card-content">
        <h3>{item.title}</h3>
      </div>
    </Link>
  );
}

export default function IndexCards({ items }) {
  return (
    <div className="ia-card-grid">
      {items.map((item, index) => (
        <CardItem key={index} item={item} />
      ))}
    </div>
  );
}