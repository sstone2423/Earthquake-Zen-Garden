import { SortDirection } from '../constants/constants';

/**
 * General utility functions file
 */

/**
 * Sorts the data depending on the selected column and current sort direction
 * @param {Array<Object>} data data to be sorted
 * @param {string} data[i].properties.place
 * @param {number} data[i].properties.mag
 * @param {number} data[i].properties.time
 * @param {Object} sortConfig
 * @param {SortDirection} sortConfig.direction
 * @param {string} sortConfig.colId
 * @returns {Array<Object>} sorted data
 */
export const sortData = (data, sortConfig) => {
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

/**
 * Changes the sort direction to the next direction in the list OR fully resets to ascending
 * @param {SortDirection} currentSortDirection
 * @param {boolean} shouldReset whether the direction should reset to ascending
 * @returns {SortDirection}
 */
export const changeSortDirection = (currentSortDirection, shouldReset) => {
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
 * Formats a numeric timestamp to Fri Apr 13 2018, 2:25 PM fromat
 * @param {number} timestamp
 * @returns formatted date
 */
export const formatDate = timestamp => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  // convert from 24 hours to 12 hours
  const formattedHours = ((hours + 11) % 12) + 1;

  const minutes = date.getMinutes();
  // convert from single digit to always having double digit for example 09 instead of 9
  const formattedMinutes = minutes.toString().length === 1 ? `0${minutes}` : minutes;

  return `${date.toDateString()}, ${formattedHours}:${formattedMinutes} ${
    hours > 12 ? 'PM' : 'AM'
  }`;
};
