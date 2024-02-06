// type CardFourProp = {
//   user: string;
// };

const Card = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between">
        <div>
          <h1>Product</h1>
          <div>
            <h1>Suagr</h1>
          </div>
        </div>
        <div>
          <h1>Price</h1>
          <div>
            <h1>1000</h1>
          </div>
        </div>
        <div>
          <h1>Qty</h1>
          <div>
            <h1>2</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
