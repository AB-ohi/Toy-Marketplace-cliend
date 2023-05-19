import { useState } from 'react';
import './Toys.css'
const Gallery = () => {
  const  toys = [
      {
          _id: 1,
          ImageUrl:"https://i.ibb.co/qjKZQc9/maxresdefault.jpg" ,
          
      },
      {
          _id: 2,
          ImageUrl: "https://i.ibb.co/T1k28qV/d6818a1e-1b29-4606-8aff-53b71ac7a5e5.jpghttps://i.ibb.co/t35VMQx/61234-Marvel-Iron-Man-15.jpg",
          
      },
      {
          _id: 3,
          ImageUrl: "https://i.ibb.co/bQypyg5/hot-toys-reveals-spider-man-action-figure-from-spider-man-no-way-home.jpg",
          
      },
      {
          _id: 4,
          ImageUrl: "https://i.ibb.co/qM4RY5b/61-DDw-Mkb5-NL-AC-SL1500.jpg",
          
      },
      {
          _id: 5,
          ImageUrl: "https://i.ibb.co/6nk5cQ9/Dr-Strange-Japan-1.jpg",
          
      },
      {
          _id: 6,
          ImageUrl: "https://i.ibb.co/T1k28qV/d6818a1e-1b29-4606-8aff-53b71ac7a5e5.jpg",
          
      }
  ]
  const [model, setModel] = useState(false);
  const [tempImgSrc,setTempImgSrc] =useState('')

  const getImg = (ImageUrl) =>{
    setTempImgSrc(ImageUrl);
    setModel(true);
  }

  console.log(toys)
  return (
    <div>
            <h1 className='gallery-heder'>Toy gallery</h1>
            <div className={model? "model-open": "model"}>

                <img src={tempImgSrc}></img>
                <h1 onClick={() => setModel(false)}>X</h1>
            </div>
       <div className="gallery">
       {
            toys.map((toy) =>
                <img
                key={toy._id}
                src={toy.ImageUrl}
                style={{width:'100%'}}
                className="pics"
                onClick={()=>getImg(toy.ImageUrl)}
                ></img>
            )
        }
       </div>
    </div>
  );
};

export default Gallery;
