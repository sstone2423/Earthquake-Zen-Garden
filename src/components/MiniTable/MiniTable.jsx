import React from 'react';
import './_mini-table.css';
import PropTypes from 'prop-types';

const propTypes = {
  // each row will have values for the first and second columns of the table / list
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

const defaultProps = {
  rows: [],
};

/**
 * Main purpose is to keep consistent styling
 */
const MiniTable = ({ rows }) => (
  <table>
    <tbody className="mini-table__tbody">
      {rows.map(({ title, value }) => (
        <tr className="mini-table__tr">
          <td className="mini-table__title">{title}</td>
          <td className="mini-table__value">{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

MiniTable.propTypes = propTypes;
MiniTable.defaultProps = defaultProps;
export default MiniTable;
