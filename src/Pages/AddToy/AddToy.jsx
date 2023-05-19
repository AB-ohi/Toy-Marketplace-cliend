import Swal from 'sweetalert2'

const AddToy = () => {

    const handelAddToy = event =>{
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const sellerName =form.sellerName.value;
        const email = form.email.value;
        const SubCategory = form.SubCategory.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const picture = form.picture.value;
        const newToy = {name, sellerName, email, SubCategory, price, quantity, picture }
        console.log(newToy)

        fetch('http://localhost:5000/addToy',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'success',
                    text: 'Do you want to continue',
                    icon: 'submit',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-center font-semibold text-5xl">Add Toy</h1>
              <form onSubmit={handelAddToy}>
                <div className="md:flex gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                        required
                      type="text"
                      placeholder="Toy Name"
                      name="name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">seller name</span>
                    </label>
                    <input
                        required
                      type="text"
                      placeholder="Seller Name"
                      name="sellerName"
                      className="input input-bordered"
                    />
                  </div>
                </div>
                <div className="md:flex gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Seller Email</span>
                    </label>
                    <input
                        required
                      type="text"
                      placeholder="Email"
                      name="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Sub-category</span>
                    </label>
                    <input
                        required
                      type="text"
                      placeholder="Sub-category"
                      name="SubCategory"
                      className="input input-bordered"
                    />
                  </div>
                </div>
                <div className="md:flex gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                        required
                      type="text"
                      placeholder="Price"
                      name="price"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Available quantity</span>
                    </label>
                    <input
                        required
                      type="text"
                      placeholder="Quantity"
                      name="quantity"
                      className="input input-bordered"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Picture URL</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="URL"
                    name="picture"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
