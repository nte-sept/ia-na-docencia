import React from 'react';
import Link from '@docusaurus/Link';

export default function FeatureCard({ description, buttonText, destination }) {
  return (
    <div className="feature-card">
      <p className="feature-card-desc">{description}</p>
      <Link className="button button--primary feature-card-btn" to={destination}>
        {buttonText}
      </Link>
    </div>
  );
}