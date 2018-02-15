import React from 'react';
import PropTypes from 'prop-types';

const Task = props => (
  <input
    type="text"
    placeholder="Tasks for today"
    onChange={event => props.titleContent(event)}
    value={props.title}
  />
);
Task.propTypes = {
  titleContent: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
export default Task;

