import { useMutation, useQueryClient } from "react-query";
import { addProductApi } from "../api/product";

export const useAddProductApi = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addProductApi,
    onSuccess: (response) => {
      // console.log('response in hook', response);
      // if (response && response.token) {
      //   localStorage.setItem('token', response.token);
      // }
      queryClient.invalidateQueries(['product']);
    },
  });
};
