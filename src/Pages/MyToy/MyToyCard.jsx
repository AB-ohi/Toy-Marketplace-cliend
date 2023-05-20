const MyToyCard = ({ myToy }) => {
  const {picture, name, price, quantity} = myToy;
  return (
    <div className="card w-96 glass">
      <figure>
        <img
          src={picture}
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: {price}$</p>
        <p>quantity: {quantity}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
};

export default MyToyCard;
