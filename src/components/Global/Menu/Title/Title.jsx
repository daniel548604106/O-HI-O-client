import PropTypes from 'prop-types';
import React from 'react';

import classes from './Title.module.scss';

const Title = ({ title }) => {
  return (
    <div className={classes.title}>
      <p>{title}</p>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
