// import React, { MouseEventHandler } from 'react'
import { MouseEventHandler } from 'react';
import { ButtonsWithIcon } from './Buttons';

type SingleProductFormType = {
  // handleRemove?: void;
  handleRemove?: MouseEventHandler<HTMLAnchorElement> | undefined;
  index: number
};

const SingleProductForm = (prop: SingleProductFormType) => {
  return (
    <div>
      <div className="mb-4.5 flex items-center flex-colsx gap-6 xl:flex-row">
        <div className="w-full xl:w-1/3">
          <label className="mb-2.5 block text-black dark:text-white">
            Product
          </label>
          <input
            type="text"
            placeholder="Enter your product name"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>

        <div className="w-1/2 xl:w-1/3">
          <label className="mb-2.5 block text-black dark:text-white">
            Price
          </label>
          <input
            type="number"
            placeholder="Enter your last name"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="w-1/2 xl:w-1/3">
          <label className="mb-2.5 block text-black dark:text-white">
            quantity
          </label>
          <input
            type="number"
            placeholder="Enter your last name"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="w-1/2 xl:w-1/3 h-full">
          <label className="mb-2.5 block text-black dark:text-white">
            action
          </label>
          {/* <input
                  type="number"
                  placeholder="Enter your last name"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                /> */}
          {/* <button>lol</button> */}
        { prop.index > 0 &&  <ButtonsWithIcon text="Remove" handleAdd={prop.handleRemove} />}
        </div>
      </div>
    </div>
  );
}

export default SingleProductForm