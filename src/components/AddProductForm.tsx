import { ChangeEvent, useEffect, useState } from 'react'
import { ButtonsWithIcon } from './Buttons';
import SingleProductForm from './SingleProductForm';
import { useAddProductApi, useEditProductApi, useGetProductApi } from '../data/hooks/product';
import { useGetUserApi } from '../data/hooks/auth';
import { message } from 'antd';
import { getProductApi } from '../data/api/product';
import { useNavigate, useSearchParams } from 'react-router-dom';

type ProductType = {
 name: string;
 price: number;
 quantity: number;
}

type ProductTypeExtend = ProductType & { _id?: string }


const AddProductForm = () => {
  const [searchParams] = useSearchParams();
  const editId = searchParams.get('edit');
 const [products, setProducts] = useState<ProductTypeExtend[]>([
   { name: '', quantity: 1, price: 0 },
 ]);
   const navigate = useNavigate();

useEffect(()=>{
  if(editId){
    let editData = localStorage.getItem('editData')
    if(editData){
      editData = JSON.parse(editData)
      const editProduct = editData?.products 
      setProducts(editProduct)
    }
  }
},[])

 const handleAdd  = ()=>{
  setProducts([...products, {name:'', quantity: 1, price: 0}])
 }


 const handleRemove = (i: number)=>{
  let newProduct = [...products]
  const filteredProducts = products.filter((item, index)=> index !== i )
  setProducts(filteredProducts)
 }
 const {data: getProductData,} = useGetProductApi()
 console.log({getProductData});


const handleChange = (index: number,e: ChangeEvent<HTMLInputElement> )=>{
  const newArray  = products.map((prod, ind)=>{
    if(ind === index){
      return {...prod, [e.target.name]: e.target.value}
    }else{
      return prod
    }
  })
  setProducts(newArray)
}
const {data, isLoading,} =  useGetUserApi()
const {data: productData} =  useGetProductApi()
const { mutateAsync,  } = useAddProductApi()
const { mutateAsync: editMutateAsync } = useEditProductApi();

const handleAddProduct = async  (e: any)=>{
  const postObject = {
    products,
    authorId: data.user._id
  }

  let isInvalidInput;

  for (let i = 0; i < products.length; i++) {
    if(products[i].name === '' || products[i].price === 0 ){
      isInvalidInput = true;
    }
  }

  e.preventDefault()

try {
  if(isInvalidInput){
    await message.error('Product name can not be empty')
    return
  }
const response = await mutateAsync(postObject)
if(response){
   message.success('Product successfully added')
}

setProducts([{name: '', quantity: 1, price: 0}])
} catch (error: any) {
  await message.error(error)
  
}
}

const handleEditProduct = async (e: any) => {
  const postObject = {
    products,
    authorId: data.user._id,
  };

  let isInvalidInput;

  for (let i = 0; i < products.length; i++) {
    if (products[i].name === '' || products[i].price === 0) {
      isInvalidInput = true;
    }
  }

  e.preventDefault();

  try {
    if (isInvalidInput) {
      await message.error('Product name can not be empty');
      return;
    }
    const formattedProduct = products.map((product)=>{
      // remove _id prop from product object
      const { _id, ...rest } = product;
      return rest;
    })
    const response = await editMutateAsync({
      id: editId as string,
      post: { products: formattedProduct },
    });
    if (response) {
      message.success('Product successfully updated');
    }
    localStorage.removeItem('editData');
    navigate('/')


    setProducts([{ name: '', quantity: 1, price: 0 }]);
  } catch (error: any) {
    await message.error(error);
  }
};

const handleSubmit = editId ? handleEditProduct : handleAddProduct;

 
  return (
    <div>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mt-5">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white text-center">
            Add Product
          </h3>
        </div>
        <form action="#" onSubmit={handleSubmit}>
          <div className="p-6.5">
            {products.map((product, index) => (
              <SingleProductForm
                key={index}
                handleRemove={() => handleRemove(index)}
                index={index}
                element={product}
                handleChange={handleChange}
              />
            ))}

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Subject
              </label>
              <ButtonsWithIcon text="Add More Product" handleAdd={handleAdd} />
            </div>

            <button
              className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
              disabled={isLoading}
            >
              {editId ? 'Update Product': 'Add Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductForm
