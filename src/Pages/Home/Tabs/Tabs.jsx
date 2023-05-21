import { useState } from "react";
import "./Tabs.css";
import { Link } from "react-router-dom";

const Tabs = () => {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="Tabs">
      <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "50px" }}>
        Toy Tab
      </h1>
      <div className="tabList">
        <div
          className={`tabHead ${tabs === 0 ? "active" : null}`}
          onClick={() => setTabs(0)}
        >
          Tab1
        </div>
        <div
          className={`tabHead ${tabs === 1 ? "active" : null}`}
          onClick={() => setTabs(1)}
        >
          Tab2
        </div>
        <div
          className={`tabHead ${tabs === 2 ? "active" : null}`}
          onClick={() => setTabs(2)}
        >
          Tab3
        </div>
      </div>
      <div className="tabContent md:m-[50%]" hidden={tabs != 0}>
        <div className="grid md:grid-cols-2">
        <div className="card md:w-2/3 bg-base-100 shadow-xl m-auto">
          <div className="card-body">
            <h2 className="card-title">Lady Spider</h2>
            <p>Price:120$</p>
            <Link to="/detail"><button className="btn btn-outline btn-info">View Details</button></Link>
          </div>
          <figure>
            <img
            className="w-full"
              src="https://i.ibb.co/BTVQDZF/DSC01092-1024x1024.webp"
              alt=""
            />
          </figure>
        </div>
        <div className="card md:w-2/3 bg-base-100 shadow-xl m-auto">
          <div className="card-body">
            <h2 className="card-title">Spider Man</h2>
            <p>Price:200$</p>
            <Link to="/detail"><button className="btn btn-outline btn-info">View Details</button></Link>
          </div>
          <figure>
            <img
            className="w-full"
              src="https://i.ibb.co/tZFhgmx/DSC3990-1024x1024.webp"
              alt=""
            />
          </figure>
        </div>
        </div>
      </div>
      <div className="tabContent  md:m-[50%]" hidden={tabs != 1}>
        <div className="grid md:grid-cols-2">
        <div className="card md:w-2/3 bg-base-100 shadow-xl m-auto">
          <div className="card-body">
            <h2 className="card-title">Iron Man</h2>
            <p>Price:500$</p>
            <Link to="/detail"><button className="btn btn-outline btn-info">View Details</button></Link>
          </div>
          <figure>
            <img
              src="https://i.ibb.co/XkPcynL/DSF0119-1024x1024-2x.webp"
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="card md:w-2/3 bg-base-100 shadow-xl m-auto">
          <div className="card-body">
            <h2 className="card-title">Iron Man</h2>
            <p>Price:455$</p>
            <Link to="/detail"><button className="btn btn-outline btn-info">View Details</button></Link>
          </div>
          <figure>
            <img
              src="https://i.ibb.co/M1WxJfQ/fullsizeoutput-7aa-1024x1024.webp"
              alt="Shoes"
            />
          </figure>
        </div>
        </div>
      </div>
      <div className="tabContent" hidden={tabs != 2}>
        <div className="grid md:grid-cols-2">
        <div className="card md:w-2/3 bg-base-100 shadow-xl m-auto">
          <div className="card-body">
            <h2 className="card-title">Captain America</h2>
            <p>Price: 50$</p>
            <Link to="/detail"><button className="btn btn-outline btn-info">View Details</button></Link>
          </div>
          <figure>
            <img
              src="https://i.ibb.co/FXqwqr2/fullsizeoutput-1c3-1024x1024-2x.webp"
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="card md:w-2/3 bg-base-100 shadow-xl m-auto">
          <div className="card-body">
            <h2 className="card-title">Captain America</h2>
            <p>Price: 40$</p>
            <Link to="/detail"><button className="btn btn-outline btn-info">View Details</button></Link>
          </div>
          <figure>
            <img
              src="https://i.ibb.co/KypcT9Q/fullsizeoutput-1bd-1024x1024-2x.webp"
              alt="Shoes"
            />
          </figure>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
