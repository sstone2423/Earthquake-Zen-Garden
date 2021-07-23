import React from 'react';
import { Link } from 'react-router-dom';
import sampleData from '../../utils/SampleData.json';
import './_header.css';

/**
 * Displays realtor.com logo, app title, user name
 * Logo click goes to home page
 * User name click goes to profile page
 */
const Header = () => {
  // Would normally fetch information about the user's profile using native fetch or axios
  const {
    site: { title, logoImage },
    profile: { firstName },
  } = sampleData;

  return (
    <nav className="header">
      <Link to="/">
        <img src={logoImage} alt="Realtor.com logo" height="50" width="50" />
      </Link>
      <h1 className="header__title">{title}</h1>
      <Link to="/profile" className="header__username">
        Welcome {firstName}
      </Link>
    </nav>
  );
};

export default Header;
