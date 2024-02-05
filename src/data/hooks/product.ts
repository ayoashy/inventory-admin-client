import { useMutation, useQuery, useQueryClient } from "react-query";
import { addProductApi, getProductApi } from "../api/product";

export const useAddProductApi = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addProductApi,
    onSuccess: () => {
      queryClient.invalidateQueries(['product']);
    },
  });
};


export const useGetProductApi = () => {
  return useQuery({
    queryKey: ['product'],
    queryFn: getProductApi,
    retry: false,
    refetchOnWindowFocus: false,
  });
};

