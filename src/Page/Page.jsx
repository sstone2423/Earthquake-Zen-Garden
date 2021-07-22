import React from 'react';

/**
 * Common page component that has a title and some content
 * All content within is centered
 */
const Page = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    <div className="content">{children}</div>
  </div>
);

export default Page;
