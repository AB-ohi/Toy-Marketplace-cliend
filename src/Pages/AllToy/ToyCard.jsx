import { Link } from "react-router-dom";

const ToyCard = ({ allToy }) => {
  const { toyName, subCategory, price, availableQuantity, Seller } = allToy;

  return (
    <div>
      <tbody>
      <tr>
           <div className=" rounded-lg">
            <td>{toyName}</td>
            <td>{Seller}</td>
            <td>{subCategory}</td>
            <td>{price}$</td>
            <td>{availableQuantity}</td>
            <td><Link to="/detail">
              <button className="btn btn-outline btn-success">
                View Detail
              </button>
            </Link></td>
         </div>
          </tr>
      </tbody>
    </div>
  );
};

export default ToyCard;

//
      
