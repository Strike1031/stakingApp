import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';

const DashboardDefault = Loadable(lazy(() => import('views/Dashboard/Default')));
const TaskCenterPage = Loadable(lazy(() => import('views/taskCenter')));
const WithdrawEarningPage = Loadable(lazy(() => import('views/withdrawEarning')));
const WithdrawlHistoryPage = Loadable(lazy(() => import('views/withdrawalHistory')));
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
    { path: '/withdrawEarning', element: <WithdrawEarningPage /> },
    { path: '/withdrawalHistory', element: <WithdrawlHistoryPage /> },
    { path: '/invest', element: <InvestPage /> },
  ]
};

export default MainRoutes;
