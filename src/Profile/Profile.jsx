import React from 'react';
import Page from '../Page/Page';
import sampleData from '../utils/SampleData.json';

/**
 * Displays information about the user
 * Displays first and last name, phone number, email, bio, and profile photo
 */
const Profile = () => {
  // This could be passed from the header using a HOC such as App.jsx,
  // a global store such as redux, or fetched from an API
  const {
    profile: { firstName, lastName, avatarImage, phone, email, bio },
  } = sampleData;

  return (
    <Page title="Profile">
      <div>
        <img src={avatarImage} alt={`${firstName} ${lastName} avatar`} />
      </div>
      <div id="profile-details">
        <div>
          <h4>First name</h4>
          {firstName}
        </div>
        <div>
          <h4>Last name</h4>
          {lastName}
        </div>
        <div>
          <h4>Phone</h4>
          {phone}
        </div>
        <div>
          <h4>Email</h4>
          {email}
        </div>
        <div>
          <h4>Bio</h4>
          {bio}
        </div>
      </div>
    </Page>
  );
};

export default Profile;
