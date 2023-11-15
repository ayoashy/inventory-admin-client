import { createContext, useContext, useEffect, useState } from 'react';
import { getUserApi } from '../data/api/auth';
import Loader from '../common/Loader';

const AuthContext = createContext(undefined);

const AuthProvider = (props: any) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await getUserApi();
        setUser(data);
        setLoading(false);
      } catch (error) {
        setUser(null);
        setLoading(false);
      }
    };
    getUser();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <AuthContext.Provider {...props} value={user} />;
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
