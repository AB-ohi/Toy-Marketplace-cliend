import Swal from 'sweetalert2'

const MyToyCard = ({ myToy }) => {
  const {_id, picture, name, price, quantity, description} = myToy;

  const handelToDelete = id =>{
    const proceed = confirm("You Delete Post")
    if(proceed){
      fetch(`https://toy-marketplace-server-chi.vercel.app/addToy/${id}`,{
        method:"DELETE"
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.deletedCount > 0){ 
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            
          }
      })
    }
  }

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
        <p className="text-lg font-bold">{description}</p>
        <p>Price: {price}$</p>
        <p>quantity: {quantity}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handelToDelete(_id)} className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MyToyCard;
