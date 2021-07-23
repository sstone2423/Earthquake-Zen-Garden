import React from 'react';
import Page from '../Page/Page';
import sampleData from '../../utils/SampleData.json';
import MiniTable from '../MiniTable/MiniTable';
import './_profile.css';

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

  const rows = [
    { title: 'First name', value: firstName },
    { title: 'Last name', value: lastName },
    { title: 'Phone', value: phone },
    { title: 'Email', value: email },
    { title: 'Bio', value: bio },
  ];

  return (
    <Page title="Profile">
      <div className="profile__container">
        <div>
          <img
            className="profile__avatar"
            src={avatarImage}
            alt={`${firstName} ${lastName} avatar`}
            height="180"
            width="180"
          />
        </div>
        <div id="profile-details">
          <MiniTable rows={rows} />
        </div>
      </div>
    </Page>
  );
};

export default Profile;
