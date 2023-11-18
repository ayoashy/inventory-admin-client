import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';
import { AuthProvider, useAuth } from './context/AuthContext';
import UnauthenticatedApp from './Unauthenticated';
import AdminApp from './Admin';
import { AuthDataContext } from './context/authDataContext';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

const SelectApp = () => {
  const data = useAuth();
  if (!data) return <UnauthenticatedApp />;

  let app;
  if (data?.user.type === 'admin') {
    app = <AdminApp />;
  } else if (data?.user.type === 'sales') {
    return <h1 className="">this is sales app</h1>;
  }

  return (
    <AuthDataContext.Provider value={data}>{app}</AuthDataContext.Provider>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <SelectApp />
    </AuthProvider>
  );
};

export default App;
