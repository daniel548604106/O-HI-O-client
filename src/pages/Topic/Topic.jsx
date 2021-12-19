import Hero from 'components/Topic/Hero/Hero.jsx';
import React from 'react';

import classes from './Topic.module.scss';

const Topic = () => {
  return (
    <div className={classes.topicContainer}>
      <Hero />
      <div>Topic</div>
      <div>Topic</div>
      <div>Topic</div>
      <div>Topic</div>
      <div>Topic</div>
      <div>Topic</div>
      <div>Topic</div>
      <div>Topic</div>
      <div>Topic</div>
      <div>Topic</div>
    </div>
  );
};

export default Topic;
