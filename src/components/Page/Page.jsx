import React from 'react';
import './_page.css';
import PropTypes from 'prop-types';

const propTypes = {
  // page title to be displayed above the content
  title: PropTypes.string.isRequired,
  // children to be rendered underneath the page title
  children: PropTypes.node.isRequired,
};

/**
 * Common page component that has a title and some content
 * All content within is centered
 */
const Page = ({ title, children }) => (
  <div className="page">
    <h2 className="page__title">{title}</h2>
    <div>{children}</div>
  </div>
);

Page.propTypes = propTypes;
export default Page;
