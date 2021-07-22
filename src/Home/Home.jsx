import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Page from '../Page/Page';
import sampleData from '../utils/SampleData.json';
import { SortDirection } from '../constants/constants';

const sortData = (data, sortConfig) => {
  const { colId, direction } = sortConfig;
  // only sort if a column is selected
  if (colId && direction !== SortDirection.NONE) {
    // collator handles alphanumeric strings and case-sensitivity
    const collator = new Intl.Collator(undefined, {
      numeric: true,
      sensitivity: 'base',
    });

    return data.sort((a, b) => {
      // first get the values being sorted
      const valueToSortA = a.properties[colId];
      const valueToSortB = b.properties[colId];

      // then compare based off ASC or DESC
      if (direction === SortDirection.ASC) {
        if (typeof valueToSortA === 'string' && typeof valueToSortB === 'string') {
          return collator.compare(valueToSortA, valueToSortB);
        }
        return valueToSortA - valueToSortB;
      }

      // DESC
      if (typeof valueToSortA === 'string' && typeof valueToSortB === 'string') {
        return collator.compare(valueToSortB, valueToSortA);
      }
      return valueToSortB - valueToSortA;
    });
  }

  // return the same data as the sort won't change
  return data;
};

const changeSortDirection = (currentSortDirection, shouldReset) => {
  if (shouldReset) {
    return SortDirection.ASC;
  }

  switch (currentSortDirection) {
    case SortDirection.NONE:
      return SortDirection.ASC;

    case SortDirection.ASC:
      return SortDirection.DESC;

    case SortDirection.DESC:
    default:
      return SortDirection.NONE;
  }
};

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
            <th onClick={() => handleColumnHeaderClick('place')}>Title</th>
            <th onClick={() => handleColumnHeaderClick('mag')}>Magnitude</th>
            <th onClick={() => handleColumnHeaderClick('time')}>Time</th>
          </tr>
        </thead>
        <tbody>
          {formattedData.map(({ properties: { mag, place, time }, id }) => (
            <tr key={`${mag}-${place}-${time}`}>
              <td>
                <Link
                  // send the earthquake id to the details page
                  to={`/detail/${id}`}>
                  {place}
                </Link>
              </td>
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
