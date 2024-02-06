import Loader from "../../common/Loader";
import CardFour from "../../components/CardFour";
import CardThree from "../../components/CardThree";
import CardTwo from "../../components/CardTwo";
import { useGetProductApi } from "../../data/hooks/product";

type ProductType = {
  name: string;
  price: number;
  quantity: number
}

type DisplayProductType = {
  _id: string;
  products: ProductType[];
  authorId: {
    name: string;
    _id: string;
    email: string;
    type: string
  }

}



const DisplayProduct = () => {
  const { data, isLoading } = useGetProductApi();

  if(isLoading) return <Loader/>
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mb-10">
        {/* <CardOne /> */}
        <CardTwo sales={data?.processProduct.totalSales} />
        <CardThree product={data?.processProduct.totalProduct} />
        <CardFour user={data?.processProduct.totalUser} />
        {/* <Card/> */}
      </div>
      {data?.product.map((product: DisplayProductType) => {
        return (
          <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark my-4">
            <div className="flex justify-between ">
              <div>
                <h1 className="bg-primary p-1 text-white rounded-sm w-16 text-center">
                  Product
                </h1>
                {product.products.map((prod) => (
                  <div>
                    <h1>-{prod.name}</h1>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="bg-primary p-1 text-white rounded-sm w-16 text-center">
                  Price
                </h1>
                {product.products.map((prod) => (
                  <div>
                    <h1>-{prod.price}</h1>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="bg-primary p-1 text-white rounded-sm w-16 text-center">
                  Qty
                </h1>
                {product.products.map((prod) => (
                  <div>
                    <h1>-{prod.quantity}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayProduct;
