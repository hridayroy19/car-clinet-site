import second from "../../../../assets/images/about_us/parts.jpg"
import preson from "../../../../assets/images/about_us/person.jpg"

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-12">
         <div className=" lg:w-1/2 relative">
         <img src={preson} className="w-[460px] h-[450px] rounded-lg shadow-2xl" />
         <img src={second} className=" w-[80%] absolute -right-6  top-[60%] rounded-lg border-8 border-white shadow-xl " />
         </div>
          <div>
            <h3 className="text-red-500">
            About Us
            </h3>
            <h1 className="text-5xl font-bold">We are qualified <br />
             & of experience <br />
              in this field</h1>
            <p className="py-4  w-[490px] ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <p className="py-2 w-[490px]">
            the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
            </p>
            <button className="btn bg-[#FF3811] text-white  ">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;