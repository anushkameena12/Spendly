import React, { Suspense } from 'react';
import DashboardPage from './page';
import { BarLoader } from 'react-spinners';

const Dashboard = () => {
  return (
  <div className='px-5'>
    <h1 className='text-6xl font-bold text-green-900 mb-5'>Dashboard</h1>
      {/* {Dashboard Page} */}
      <Suspense 
      fallback = {<BarLoader className='mt-4' width={"100%"} color='#933ea'/>} >
      <DashboardPage/>
      </Suspense>
      </div>
  );
};

export default Dashboard;
