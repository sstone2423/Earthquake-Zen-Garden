import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Page from '../Page/Page';
import sampleData from '../../utils/SampleData.json';
import { SortDirection } from '../../constants/constants';
import { sortData, changeSortDirection, formatDate } from '../../utils/utils';
import './_home.css';

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
  const [currentSort, setCurrentSort] = useState({
    colId: undefined,
    direction: SortDirection.NONE,
  });

  const [formattedData, setFormattedData] = useState(features);

  useEffect(() => {
    const clonedData = [...formattedData];
    setFormattedData(sortData(clonedData, currentSort));
  }, [currentSort]);

  const handleColumnHeaderClick = columnId => {
    setCurrentSort(prevState => ({
      colId: columnId,
      direction: changeSortDirection(prevState.direction, prevState.colId === columnId),
    }));
  };

  return (
    <Page title={title}>
      <table>
        <thead>
          <tr>
            <th className="home__th" onClick={() => handleColumnHeaderClick('place')}>
              Title
            </th>
            <th className="home__th" onClick={() => handleColumnHeaderClick('mag')}>
              Magnitude
            </th>
            <th className="home__th" onClick={() => handleColumnHeaderClick('time')}>
              Time
            </th>
          </tr>
        </thead>
        <tbody className="home__tbody">
          {formattedData.map(({ properties: { mag, place, time }, id }) => (
            <tr key={`${mag}-${place}-${time}`}>
              <td>
                <Link
                  className="home__link"
                  // send the earthquake id to the details page
                  to={`/detail/${id}`}>
                  {place}
                </Link>
              </td>
              <td className="home__td home__center">{mag}</td>
              <td className="home__td">{formatDate(time)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Page>
  );
};

export default Home;
