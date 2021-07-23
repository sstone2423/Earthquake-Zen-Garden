import React from 'react';
import { useParams } from 'react-router-dom';
import Page from '../Page/Page';
import sampleData from '../utils/SampleData.json';
import MiniTable from '../MiniTable/MiniTable';

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
