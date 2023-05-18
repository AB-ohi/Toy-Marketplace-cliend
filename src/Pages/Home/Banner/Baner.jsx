

const Banner = () => {
  return (
    
      <div className="carousel w-full mx-auto w-[1273px] rounded-lg">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src={img5}
          />
          <div className="absolute flex items-center h-full left-0 right-5 bottom-0 gap-x-5 text-left bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white pl-12 space-y-7'>
            <h1 className='text-7xl w-[463px]'>Affordable Price For Car Servicing</h1>
            <p className='w-[522px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex gap-5'>
            <button className="btn btn-outline btn-success">Discover More</button>
            <button className="btn btn-error">Latest Project</button>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-x-5">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={img2}
            className="w-full"
          />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-x-5">
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
            src={img3}
            className="w-full"
          />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-x-5">
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
