import { isAxiosError } from 'axios';
import {
  getAuthenticatedApi,
  unauthenticatedApi,
} from '../../helpers/axiosAPI';

type RegisterPostType = {
  name: string | undefined;
  password: string | undefined;
  email: string | undefined;
};

type LoginPostType = Omit<RegisterPostType, 'name'>;
type ForgetPasswordPostType = Pick<RegisterPostType, 'email'>;
type ResetPasswordType = {
  resetToken: string | undefined;
  password: string | undefined;
};

const registerApi = async (post: RegisterPostType) => {
  try {
    console.log('start');
    const response = await unauthenticatedApi.post('register', post);
    return response.data;
  } catch (error: any) {
    console.log('this is whole error', error);
    if (error.message === 'Network Error') {
      console.log(error.message);
      throw error.message;
    }
    if (error.response.data.error) {
      throw error.response.data.error;
    } else if (error.response) {
      console.log('this is a response error', error.response);
    } else {
      console.log('error', error.message);
    }
    throw error;
  }
};
const loginApi = async (post: LoginPostType) => {
  try {
    console.log('start');
    const response = await unauthenticatedApi.post('login', post);
    return response.data;
  } catch (error: any) {
    // throw simple error
    console.log('this is whole error', error);
    if (error.message === 'Network Error') {
      console.log(error.message);
      throw error.message;
    }
    if (error.response.data.error) {
      console.log('this is a request error', error.request);
      throw error.response.data.error;
    } else if (error.response) {
      console.log('this is a response error', error.response);
    } else {
      console.log('error', error.message);
    }
    throw error;
  }
};
const forgetPasswordApi = async (post: ForgetPasswordPostType) => {
  try {
    const response = await unauthenticatedApi.put('forgotPassword', post);
    return response.data;
  } catch (error: any) {
    // throw simple error
    console.log('this is whole error', error);
    if (error.message === 'Network Error') {
      console.log(error.message);
      throw error.message;
    }
    if (error.response.data.error) {
      console.log('this is a request error', error.request);
      throw error.response.data.error;
    } else if (error.response) {
      console.log('this is a response error', error.response);
    } else {
      console.log('error', error.message);
    }
    throw error;
  }
};

const resetPasswordApi = async ({
  resetToken,
  password,
}: ResetPasswordType) => {
  try {
    console.log({ resetToken, password }, 'payload');
    const response = await unauthenticatedApi.put(
      `resetPassword/${resetToken}`,
      password,
    );
    console.log('this is response', response);
    return response.data;
  } catch (error: any) {
    // throw simple error
    console.log('this is whole error', error);
    if (error.message === 'Network Error') {
      console.log(error.message);
      throw error.message;
    }
    if (error.response.data.error) {
      console.log('this is a request error', error.request);
      throw error.response.data.error;
    } else {
      console.log('error', error.message);
    }
    throw error;
  }
};

const getUserApi = async () => {
  try {
    const response = await getAuthenticatedApi().get('get-user');
    console.log(response);
    return response.data;
  } catch (error: any) {
    console.log('this is whole error', error);
    if (error?.message === 'Network Error') {
      console.log(error?.message);
      throw error?.message;
    }
    if (error?.response.data.error) {
      console.log('this is a request error', error?.request);
      throw error?.response.data.error;
    } else if (error?.response) {
      console.log('this is a response error', error?.response);
    } else {
      console.log('error', error?.message);
    }
    console.log(error);
    throw error;
  }
};

export {
  registerApi,
  loginApi,
  getUserApi,
  forgetPasswordApi,
  resetPasswordApi,
};
