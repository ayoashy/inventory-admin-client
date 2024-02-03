import { getAuthenticatedApi } from "../../helpers/axiosAPI";

export const addProductApi = async (post: any) => {
  try {
    const response = await getAuthenticatedApi().post('product/add-product', post);
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
