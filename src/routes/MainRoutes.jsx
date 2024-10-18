import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';

const DashboardDefault = Loadable(lazy(() => import('views/Dashboard/Default')));
const TaskCenterPage = Loadable(lazy(() => import('views/taskCenter')));
const WithdrawlPage = Loadable(lazy(() => import('views/withdrawl')));
const WithdrawlHistoryPage = Loadable(lazy(() => import('views/withdrawlHistory')));
const InvestPage = Loadable(lazy(() => import('views/invest')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/dashboard',
      element: <DashboardDefault />
    },
    { path: '/taskCenter', element: <TaskCenterPage /> },
    { path: '/withdrawl', element: <WithdrawlPage /> },
    { path: '/withdrawlHistory', element: <WithdrawlHistoryPage /> },
    { path: '/invest', element: <InvestPage /> },
  ]
};

export default MainRoutes;
