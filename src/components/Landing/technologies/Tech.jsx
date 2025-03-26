import React from 'react';
import html from '../../../assets/Tech/html.jpeg';
import css from '../../../assets/Tech/css.jpeg';
import js from '../../../assets/Tech/javascript.jpeg';
import php from '../../../assets/Tech/php.jpeg';
import wordpress from '../../../assets/Tech/wordpress.jpeg';
import react from '../../../assets/Tech/react.jpeg';
import mongodb from '../../../assets/Tech/mongo.jpeg';
import shopify from '../../../assets/Tech/shopify.jpeg';
import webflow from '../../../assets/Tech/webflow.jpeg';
import oddo from '../../../assets/Tech/oddo.jpeg';
import node from '../../../assets/Tech/node.jpeg';
import bootstrap from '../../../assets/Tech/bootstrap.jpeg';
import figma from '../../../assets/Tech/figma.jpeg';
import './Tech.css';

const images = [
  { src: html, alt: 'HTML' },
  { src: css, alt: 'CSS' },
  { src: js, alt: 'JavaScript' },
  { src: bootstrap, alt: 'Bootstrap' },
  { src: php, alt: 'PHP' },
  { src: figma, alt: 'Figma' },
  { src: node, alt: 'Node.js' },
  { src: react, alt: 'React' },
  { src: mongodb, alt: 'MongoDB' },
  { src: oddo, alt: 'Oddo' },
  { src: shopify, alt: 'Shopify' },
  { src: webflow, alt: 'Webflow' },
  { src: wordpress, alt: 'WordPress' },
];

const Tech = () => {
  return (
    <div className="tech-section py-5">
      <div className="container">
        <h2 className="tech-heading text-center mb-4">Technologies We Use</h2>
        <div className="marquee-carousel">
          <div className="marquee-container">
            {/* Duplicate images for smooth infinite scrolling */}
            {[...images, ...images].map((image, index) => (
              <div className="marquee-item" key={index}>
                <img src={image.src} alt={image.alt} className="marquee-image-tech" />
                <p className='marquee-text-tech'>{image.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
