import Purchase from '@/Components/My/Content/Purchase/Purchase.jsx';
import Refund from '@/Components/My/Content/Refund/Refund.jsx';
import Sidebar from '@/Components/My/Sidebar/SideBar.jsx';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import classes from './My.module.scss';
import Setting from './Setting/Setting.jsx';

const My = () => {
  const params = useParams();
  useEffect(() => {}, []);
  return (
    <div className={classes.myLayout}>
      <div className={classes.mySidebar}>
        <Sidebar />
      </div>
      <div className={classes.myContent}>
        {params.type === 'setting' && <Setting />}
        {params.type === 'purchase' && <Purchase />}
        {params.type === 'refund' && <Refund />}
      </div>
    </div>
  );
};

export default My;
