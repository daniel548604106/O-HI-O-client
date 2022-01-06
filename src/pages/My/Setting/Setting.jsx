import About from '@/Components/My/Content/Setting/About/About.jsx';
import General from '@/Components/My/Content/Setting/General/General.jsx';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Setting = () => {
  const location = useLocation();

  return (
    <div>
      {location.search.includes('about') && <About />}
      {!location.search && <General />}
    </div>
  );
};

export default Setting;
