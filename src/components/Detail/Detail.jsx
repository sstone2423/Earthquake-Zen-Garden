import React from 'react';
import { useParams } from 'react-router-dom';
import Page from '../Page/Page';
import sampleData from '../../utils/SampleData.json';
import MiniTable from '../MiniTable/MiniTable';

/**
 * Displays specific earthquake details based on the id passed through the query params
 * Displays title, magnitude, time, status, tsunami, and type
 */
const Detail = () => {
  // this could come from the Home componet OR it could be getting fetched
  const {
    data: { features },
  } = sampleData;

  const { earthquakeId } = useParams();

  // If this was being fetched, I could use the id to query the right earthquake details
  const {
    properties: { time, title, tsunami, status, mag, type },
  } = features.find(({ id }) => id === earthquakeId);

  const rows = [
    { title: 'Title', value: title },
    { title: 'Magnitude', value: mag },
    { title: 'Time', value: time },
    { title: 'Status', value: status },
    { title: 'Tsunami', value: tsunami },
    {
      title: 'Type',
      value: type,
    },
  ];

  return (
    <Page title={title}>
      <MiniTable rows={rows} />
    </Page>
  );
};

export default Detail;
