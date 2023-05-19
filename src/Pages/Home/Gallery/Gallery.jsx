import { useEffect, useState } from "react";
import "./Toys.css";
const Gallery = () => {
  const [toys, setToys] = useState([]);
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (ImageUrl) => {
    setTempImgSrc(ImageUrl);
    setModel(true);
  };
  useEffect(() => {
    fetch("toys.json")
      .then(res => res.json())
      .then(data => setToys(data));
  }, []);

  console.log(toys);
  return (
    <div>
      <h1 className="gallery-heder">Toy gallery</h1>
      <div className={model ? "model-open" : "model"}>
        <img src={tempImgSrc}></img>
        <h1 onClick={() => setModel(false)}>X</h1>
      </div>
      <div className="gallery">
        {toys.map(toy => (
          <img
            key={toy._id}
            src={toy.ImageUrl}
            style={{ width: "100%" }}
            className="pics"
            onClick={() => getImg(toy.ImageUrl)}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
