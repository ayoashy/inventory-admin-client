import {
  UseQueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import {
  forgetPasswordApi,
  getUserApi,
  loginApi,
  registerApi,
  resetPasswordApi,
} from '../api/auth';

export const useRegisterApi = () => {
  return useMutation({
    mutationFn: registerApi,
  });
};
export const useLoginApi = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: loginApi,
    onSuccess: (response) => {
      console.log('response in hook', response);
      if (response && response.token) {
        localStorage.setItem('token', response.token);
      }
      queryClient.invalidateQueries(['user']);
    },
  });
};

export const useForgetPasswordApi = () => {``
  return useMutation({
    mutationFn: forgetPasswordApi,
  });
};
export const useResetPasswordApi = () => {
  return useMutation({
    mutationFn: resetPasswordApi,
  });
};

export const useGetUserApi = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: getUserApi,
    retry: false,
    refetchOnWindowFocus: false,
  });
};
