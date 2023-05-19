const AddToy = () => {

    
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-center font-semibold text-5xl">Add Toy</h1>
              <form>
                <div className="md:flex gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
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
                      type="text"
                      placeholder="Quantity"
                      className="input input-bordered"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Picture URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="URL"
                    name="picture"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
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
