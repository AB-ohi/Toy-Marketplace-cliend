import { useState } from "react";
import "./Tabs.css";

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
        <div className="card md:w-2/3 bg-base-100 shadow-xl m-auto">
          <div className="card-body">
            <h2 className="card-title">Spider Man</h2>
            <p>Spider-Man is a superhero appearing in American comic books published by Marvel Comics</p>
          </div>
          <figure>
            <img
            className="w-full"
              src="https://i.ibb.co/pnm0q6b/images.jpg"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div className="tabContent" hidden={tabs != 1}>
        <div className="card md:w-2/3 bg-base-100 shadow-xl m-auto">
          <div className="card-body">
            <h2 className="card-title">Iron Man</h2>
            <p>Someone who is performs a very complex, complicated, or strenuous task without assistance</p>
          </div>
          <figure>
            <img
              src="https://i.ibb.co/MkSL69p/SH-Figuarts-Hulkbuster-001.jpg"
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
      <div className="tabContent" hidden={tabs != 2}>
        <div className="card md:w-2/3 bg-base-100 shadow-xl m-auto">
          <div className="card-body">
            <h2 className="card-title">avengers</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <figure>
            <img
              src="https://i.ibb.co/ByCM5vP/Avengers-Age-of-Ultron-Joss-Whedon.webp"
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
