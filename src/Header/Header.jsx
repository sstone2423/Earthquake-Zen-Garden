import React from 'react';
import { Link } from 'react-router-dom';
import sampleData from '../utils/SampleData.json';

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
    <nav>
      <Link to="/">
        <img src={logoImage} alt="Realtor.com logo" />
      </Link>
      <h1>{title}</h1>
      <Link to="/profile">Welcome {firstName}</Link>
    </nav>
  );
};

export default Header;
