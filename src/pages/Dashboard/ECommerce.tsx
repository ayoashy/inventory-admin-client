import AddProductForm from '../../components/AddProductForm.tsx';
import Card from '../../components/Card.tsx';
import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import ChartThree from '../../components/ChartThree.tsx';
import ChartTwo from '../../components/ChartTwo.tsx';
import ChatCard from '../../components/ChatCard.tsx';
import MapOne from '../../components/MapOne.tsx';
import TableOne from '../../components/TableOne.tsx';
import { useGetProductApi } from '../../data/hooks/product.ts';
import FormLayout from '../Form/FormLayout.tsx';

const ECommerce = () => {
  const {data,isLoading} = useGetProductApi()
  
// const {processProduct} = data

// const { processProduct } = data;
// console.log({processProduct});

  
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {/* <CardOne /> */}
        <CardTwo sales={data?.processProduct.totalSales}/>
        <CardThree product={data?.processProduct.totalProduct}/>
        <CardFour user={data?.processProduct.totalUser} />
        {/* <Card/> */}
      </div>

    <AddProductForm/>
    </>
  );
};

export default ECommerce;
