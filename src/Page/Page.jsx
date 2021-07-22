import React from 'react';
import './_page.css';

/**
 * Common page component that has a title and some content
 * All content within is centered
 */
const Page = ({ title, children }) => (
  <div className="page">
    <h2>{title}</h2>
    <div className="page__content">{children}</div>
  </div>
);

export default Page;
