import React from 'react';
import PropTypes from 'prop-types';
import './Note.css';

const Note = props => (
  <div className="outerDiv">
    <div className="please">
      <div className="textAbove">
        Please type your note below
      </div>
      <i className="fa fa-sticky-note-o" aria-hidden="true" />
    </div>
    <div className="note">
      <textarea
        onChange={(event) => {
        props.update(event);
      }}
        value={props.displayValue}
        className={props.inputState}
      />
    </div>
  </div>
);

Note.propTypes = {
  displayValue: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  inputState: PropTypes.string.isRequired,
};

export default Note;

