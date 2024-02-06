import React, { lazy } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App as AntDesignApp } from 'antd';

import { QueryClient, QueryClientProvider } from 'react-query';
import DefaultLayout from '../layout/DefaultLayout';
import ECommerce from '../pages/Dashboard/ECommerce';
import Calendar from '../pages/Calendar';
import Profile from '../pages/Profile';
import FormElements from '../pages/Form/FormElements';
import FormLayout from '../pages/Form/FormLayout';
import Tables from '../pages/Tables';
import Settings from '../pages/Settings';
import Alerts from '../pages/UiElements/Alerts';
import Chart from '../pages/Chart';
import Buttons from '../pages/UiElements/Buttons';
import DisplayProduct from '../pages/Dashboard/DisplayProducts';
// const Calendar = lazy(() => import('../pages/Calendar'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <ECommerce />,
        index: true,
      },
      {
        path: '/products',
        element: <DisplayProduct />,
      },
      {
        path: '/calendar',
        element: <Calendar />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/forms/form-elements',
        element: <FormElements />,
      },
      {
        path: '/forms/form-layout',
        element: <FormLayout />,
      },
      {
        path: '/tables',
        element: <Tables />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/chart',
        element: <Chart />,
      },
      {
        path: '/ui/alerts',
        element: <Alerts />,
      },
      {
        path: '/ui/buttons',
        element: <Settings />,
      },
      {
        path: '/Buttons',
        element: <Buttons />,
      },
      {
        path: '/*',
        element: <Navigate to="/" />,
      },
    ],
  },
  {
    path: '/*',
    element: <Navigate to="/" />,
  },
]);

// const queryClient = new QueryClient();

const AdminApp = () => (
  // <QueryClientProvider client={queryClient}>
  <AntDesignApp>
    <RouterProvider router={router} />
  </AntDesignApp>
  // </QueryClientProvider>
);
export default AdminApp;
