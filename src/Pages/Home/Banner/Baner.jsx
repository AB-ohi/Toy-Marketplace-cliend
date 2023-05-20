import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
  return (
    
      <div className="carousel w-full mx-auto w-[1273px] rounded-lg">
        <div id="slide1" className="carousel-item relative w-full banner-img">
          <img
            src="https://i.ibb.co/F7bvmRF/avengers-endgame-marvel-comics-4148x2334-936.jpg"
          />
          <div className="absolute flex items-center h-full left-0 right-5 bottom-0 gap-x-5 text-left bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white pl-12 space-y-7'>
            <h1 className='text-7xl w-[463px] banner-body'>Avengers toy market</h1>
            <p className='w-[522px]'>The Avenger toy features a highly detailed design that captures the iconic look of Earth is mightiest heroes. Each Avenger is faithfully recreated with precision and attention to detail, from their unique costumes to their signature weapons and accessories. Whether it is Iron Man is sleek armor, Captain America is shield, Thor is mighty hammer, or Black Widow is deadly gadgets, every detail is included to make this toy a true collector is item.</p>
            <div className='flex gap-5'>
            <Link to="/alltoy"><button className="btn btn-outline btn-success">view all Toy</button></Link>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0 gap-x-5">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full banner-img">
          <img
            src="https://i.ibb.co/vwJgKZQ/avengers-endgame-avengers-infinity-war-thanos-marvel-10580x3000-1479.jpg"
            
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0 gap-x-5">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/spT8Byn/iron-man-minimal-art-polygonal-marvel-superheroes-dark-3840x2160-3482.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0 gap-x-5">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
  );
};

export default Banner;
