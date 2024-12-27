import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Start Free Trial',
      item: 'https://fotogram.technology/signup',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Pricing',
      item: 'https://www.fotogram.technology/pricing',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Our Story',
      item: 'https://fotogram.technology/our-story',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Why Fotogram',
      item: 'https://fotogram.technology/why-fotogram',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Talk to Sales',
      item: 'https://fotogram.technology/get-in-touch',
    },
  ],
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.innerHTML = JSON.stringify(breadcrumbSchema);
document.head.appendChild(script);

// Add descriptive anchor text for internal links
const internalLinks = document.querySelectorAll('a');
internalLinks.forEach(link => {
  if (!link.title) {
    link.title = link.textContent.trim();
  }
});
