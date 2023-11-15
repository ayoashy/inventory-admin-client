import { useMutation, useQuery, useQueryClient } from 'react-query';
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
  return useMutation({
    mutationFn: loginApi,
  });
};
export const useForgetPasswordApi = () => {
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
  });
};
