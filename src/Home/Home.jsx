import React, { useState, useEffect } from 'react';
import Page from '../Page/Page';
import sampleData from '../utils/SampleData.json';
import { SortDirection } from '../constants/constants';

const sortData = data => data.sort();

/**
 * Default view the user sees when app loads
 * Clicking on one of the items in the list should take the user to the Detail View
 * Clicking the column header should sort the data according to that column
 * Clicking the column header successively should toggle the sort directions
 */
const Home = () => {
  // would normally fetch this data using native fetch or axios, then set it to local state
  const {
    data: {
      metadata: { title },
      features,
    },
  } = sampleData;

  // keep in state for data sorting when interacting with the table column headers
  const [formattedData, setFormattedData] = useState(features);
  const [currentSort, setCurrentSort] = useState({
    colId: undefined,
    direction: SortDirection.NONE,
  });

  useEffect(() => {
    // clone so that the local data state is not mutated
    const clonedData = [...formattedData];
    setFormattedData(sortData(clonedData));
  }, [currentSort]);

  return (
    <Page title={title}>
      <table>
        <thead>
          <th>Title</th>
          <th>Magnitude</th>
          <th>Time</th>
        </thead>
        <tbody>
          {formattedData.map(({ properties: { mag, place, time } }) => (
            <tr>
              <td>{place}</td>
              <td>{mag}</td>
              <td>{time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Page>
  );
};

export default Home;
