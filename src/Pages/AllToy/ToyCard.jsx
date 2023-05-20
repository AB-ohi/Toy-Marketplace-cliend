const ToyCard = ({ allToy }) => {
  const {toyName, subCategory, price, availableQuantity, no, Seller} = allToy;

  return (
    <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>toyName</th> 
        <th>Seller</th> 
        <th>subCategory</th> 
        <th>price</th> 
        <th>Quantity</th> 
        <th></th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>{no}</th> 
        <td>{toyName}</td> 
        <td>{Seller}</td> 
        <td>{subCategory}</td> 
        <td>{price}$</td> 
        <td>{availableQuantity}</td> 
        <button className="btn btn-outline btn-success">View Detail</button>
      </tr>
    </tbody> 
  </table>
</div>
  );
};

export default ToyCard;

