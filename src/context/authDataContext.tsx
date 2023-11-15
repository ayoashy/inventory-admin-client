import { createContext, useContext } from 'react';

export const AuthDataContext = createContext(undefined);

export const useAuthData = () => {
  const value = useContext(AuthDataContext);
  if (!value) {
    throw new Error(
      'Auth Context must be used within AuthDataContext Provider'
    );
  } else {
    return value;
  }
};
