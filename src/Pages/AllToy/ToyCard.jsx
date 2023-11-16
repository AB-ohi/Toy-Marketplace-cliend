import { Link } from "react-router-dom";

const ToyCard = ({ allToy }) => {
  const { toyName, subCategory, price, availableQuantity, Seller } = allToy;

  return (
      <tr>
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
          </tr>
  );
};

export default ToyCard;

//
      
