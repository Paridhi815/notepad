import React from 'react';
import './Header.css';

import PropTypes from 'prop-types';

const Header = props => (
  <header className="head">
    <b>{props.headerText}</b>
  </header>
);

Header.propTypes = {
  headerText: PropTypes.string,
};

Header.defaultProps = {
  headerText: 'hello',
};
export default Header;

