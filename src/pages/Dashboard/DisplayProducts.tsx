import { FaBox, FaDollarSign, FaCubes, FaCalculator, FaEdit, FaTrash } from 'react-icons/fa';
import Loader from '../../common/Loader';
import CardFour from '../../components/CardFour';
import CardThree from '../../components/CardThree';
import CardTwo from '../../components/CardTwo';
import { useGetProductApi } from '../../data/hooks/product';

type ProductType = {
  name: string;
  price: number;
  quantity: number;
};

type DisplayProductType = {
  _id: string;
  products: ProductType[];
  authorId: {
    name: string;
    _id: string;
    email: string;
    type: string;
  };
};

const DisplayProduct = () => {
  const { data, isLoading } = useGetProductApi();

  if (isLoading) return <Loader />;

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <CardTwo sales={data?.processProduct.totalSales} />
        <CardThree product={data?.processProduct.totalProduct} />
        <CardFour user={data?.processProduct.totalUser} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.product?.map((product: DisplayProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

type ProductCardProps = {
  product: DisplayProductType;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const totalQuantity = product.products.reduce(
    (sum, prod) => sum + prod.quantity,
    0,
  );
  const totalPrice = product.products.reduce(
    (sum, prod) => sum + prod.price * prod.quantity,
    0,
  );

  return (
    <div className="rounded-lg border border-stroke bg-white p-6 shadow-md dark:border-strokedark dark:bg-boxdark">
      <div className="space-y-4">
        {product.products.map((prod, index) => (
          <div
            key={index}
            className="flex items-center justify-between space-x-4"
          >
            <div className="flex items-center space-x-2 w-1/3">
              <FaBox className="text-indigo-500" />
              <span className="text-gray-800 dark:text-gray-300">
                {prod.name}
              </span>
            </div>
            <div className="flex items-center space-x-2 w-1/3">
              <FaDollarSign className="text-green-500" />
              <span className="text-gray-800 dark:text-gray-300">
                ${prod.price.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center space-x-2 w-1/3">
              <FaCubes className="text-blue-500" />
              <span className="text-gray-800 dark:text-gray-300">
                {prod.quantity}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaCalculator className="text-purple-500" />
            <span className="font-semibold text-gray-800 dark:text-gray-300">
              Totals:
            </span>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <FaCubes className="text-blue-500" />
              <span className="font-semibold text-gray-800 dark:text-gray-300">
                {totalQuantity}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaDollarSign className="text-green-500" />
              <span className="font-semibold text-gray-800 dark:text-gray-300">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          // onClick={() => onEdit(product._id)}
          className="p-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <FaEdit className="w-5 h-5" />
        </button>
        <button
          // onClick={() => onDelete(product._id)}
          className="p-2 text-red-600 hover:text-red-800 transition-colors duration-200"
        >
          <FaTrash className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default DisplayProduct;