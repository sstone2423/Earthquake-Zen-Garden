import React from 'react';
import { useParams } from 'react-router-dom';
import Page from '../Page/Page';
import sampleData from '../utils/SampleData.json';

/**
 * Displays specific earthquake details based on the id passed through the query params
 * Displays title, magnitude, time, status, tsunami, and type
 */
const Detail = () => {
  const {
    data: { features },
  } = sampleData;

  const { earthquakeId } = useParams();

  const {
    properties: { time, title, tsunami, status, mag, type },
  } = features.find(({ id }) => id === earthquakeId);

  return (
    <Page title={title}>
      <div>
        <h4>Title</h4>
        {title}
      </div>
      <div>
        <h4>Magnitude</h4>
        {mag}
      </div>
      <div>
        <h4>Time</h4>
        {time}
      </div>
      <div>
        <h4>Status</h4>
        {status}
      </div>
      <div>
        <h4>Tsunami</h4>
        {tsunami}
      </div>
      <div>
        <h4>Type</h4>
        {type}
      </div>
    </Page>
  );
};

export default Detail;
