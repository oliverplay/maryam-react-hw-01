import React from 'react';
import PropTypes from 'prop-types';

// Individual Stats component
const Stats = ({ title, stats }) => {
  return (
    <li>
      {/* Displaying the title of the stat */}
      <h2>{title}</h2>

      {/* Displaying the stat percentage */}
      <span>{stats}%</span>
    </li>
  );
};

// Prop type validation for the Stats component
Stats.propTypes = {
  title: PropTypes.string, // Optional title string
  stats: PropTypes.number, // Optional percentage number
};

// Statistics component that renders a list of Stats components
const Statistics = ({ data }) => {
  return (
    <div>
      {/* Displaying a heading for the statistics */}
      <h2>Upload stats</h2>

      {/* Creating an unordered list to display statistics */}
      <ul>
        {/* Mapping through the 'data' prop and rendering a Stats component for each item */}
        {data.map(item => (
          <Stats
            key={item.id} // Using 'id' as the key for React
            title={item.label} // Passing the title as a prop
            stats={item.percentage} // Passing the percentage as a prop
          />
        ))}
      </ul>
    </div>
  );
};

// Prop type validation for the Statistics component
Statistics.propTypes = {
  data: PropTypes.arrayOf(
    // 'data' prop is an array of objects
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Each item object has an 'id'
      label: PropTypes.string, // Optional label string
      percentage: PropTypes.number, // Optional percentage number
    })
  ).isRequired, // 'data' is a required array
};

export default Statistics;
