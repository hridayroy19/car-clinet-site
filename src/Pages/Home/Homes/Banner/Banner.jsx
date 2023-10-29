import banner1 from "../../../../assets/images/banner/1.jpg"
import banner2 from "../../../../assets/images/banner/2.jpg"
import banner3 from "../../../../assets/images/banner/3.jpg"
import banner4 from "../../../../assets/images/banner/4.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[530px]  ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full rounded-xl" />
          <div className="absolute flex flex right-5 mr-5 gap-4 bottom-6 ">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
         
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full rounded-xl" />
          <div className="absolute flex right-5 mr-5 gap-4 bottom-6">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full rounded-xl" />
          <div className="absolute flex right-5 mr-5 gap-4 bottom-6">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full rounded-xl" />
          <div className="absolute flex right-5 mr-5 gap-4 bottom-6">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;