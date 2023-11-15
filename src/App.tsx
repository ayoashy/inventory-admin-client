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
  // if (!data) return <h2>unauthenticated</h2>;
  console.log(data);
  // if(data?.user.type === 'admin') app = <AdminApp/>;

  let app = <h2>welcome to app</h2>;

  return (
    <AuthDataContext.Provider value={data}>{app}</AuthDataContext.Provider>
  );
};

// function App() {
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1000);
//   }, []);

//   return loading ? (
//     <Loader />
//   ) : (
//     <>
//       <Toaster
//         position="top-right"
//         reverseOrder={false}
//         containerClassName="overflow-auto"
//       />
//       <Routes>
//         <Route path="/auth/signin" element={<SignIn />} />
//         <Route path="/auth/signup" element={<SignUp />} />
//         <Route element={<DefaultLayout />}>
//           <Route index element={<ECommerce />} />
//           {routes.map((routes, index) => {
//             const { path, component: Component } = routes;
//             return (
//               <Route
//                 key={index}
//                 path={path}
//                 element={
//                   <Suspense fallback={<Loader />}>
//                     <Component />
//                   </Suspense>
//                 }
//               />
//             );
//           })}
//         </Route>
//       </Routes>
//     </>
//   );
// }

const App = () => {
  return (
    <AuthProvider>
      <SelectApp />
    </AuthProvider>
  );
};

export default App;
