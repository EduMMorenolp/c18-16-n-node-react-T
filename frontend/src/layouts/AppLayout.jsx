import React from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Outlet } from 'react-router-dom';


const AppLayout = () => {
  return (
    <div>
      <Outlet />
      <ToastContainer
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
    </div>
  );
}

export default AppLayout;
