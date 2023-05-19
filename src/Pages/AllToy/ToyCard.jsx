const ToyCard = ({ allToy }) => {
  const {toyName, subCategory, price, availableQuantity, img} = allToy;

  return (
    <div className="card card-side bg-base-400 shadow-xl m-9">
      <figure>
        <img
          src={img}
          alt="Movie"
          className="w-28 rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <p>{subCategory}</p>
        <p>Price:{ price}$</p>
        <p>Quantity:{availableQuantity}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
