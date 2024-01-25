import { createContext, useContext, useEffect, useState } from 'react';
import { getUserApi } from '../data/api/auth';
import Loader from '../common/Loader';
import { useGetUserApi } from '../data/hooks/auth';
type UserContextType = {
  email: string;
  name: string;
  resetPassword?: string;
  resetPasswordExpire?: string;
  type: string;
};

export type UserType = {
  user: UserContextType;
};

const AuthContext = createContext<UserType | undefined>(undefined);

const AuthProvider = (props: any) => {
  const [user, setUser] = useState(null);

  const { data, isLoading } = useGetUserApi();

  console.log('>>> use data outside hook: ', data);

  useEffect(() => {
    if (!data) return;
    setUser(data);
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  return <AuthContext.Provider {...props} value={user} />;
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
