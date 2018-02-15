import React from 'react';
import PropTypes from 'prop-types';

const Top = props => (
  <div className="first">
    <p>
      <b>{props.titleText}</b>
    </p>
    <button>{props.buttonText}</button>
  </div>
);
Top.propTypes = {
  titleText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
export default Top;

