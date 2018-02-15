import React from 'react';
import PropTypes from 'prop-types';

const Note = props => (
  <div className="note">
    <textarea
      onChange={(event) => {
        props.update(event);
      }}
      value={props.displayValue}
      className={props.inputState}
    />
  </div>
);

Note.propTypes = {
  displayValue: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  inputState: PropTypes.string.isRequired,
};

export default Note;

