import { useState } from 'react'
import { ButtonsWithIcon } from './Buttons';
import SingleProductForm from './SingleProductForm';

type ProductType = {
 product: string;
 price: number;
 quantity: number;
}

const AddProductForm = () => {
 const [products,setProduct] = useState<ProductType[]>([{product: '', quantity: 1, price: 0}])

 const handleAdd  = ()=>{
  setProduct([...products, {product:'', quantity: 1, price: 0}])

 }
 const handleRemove = (i: number)=>{
  let newProduct = [...products]
  newProduct.splice(i,1)
  setProduct(newProduct)
 }
  return (
    <div>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mt-5">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white text-center">
            Add Product
          </h3>
        </div>
        <form action="#">
          <div className="p-6.5">
            {products.map((product, index) => (
              <SingleProductForm handleRemove={()=>handleRemove(index)} index={index} />
            ))}

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Subject
              </label>
            <ButtonsWithIcon text='Add More Product' handleAdd={handleAdd}/>
            </div>

            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductForm