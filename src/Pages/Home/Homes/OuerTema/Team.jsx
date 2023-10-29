import team1  from "../../../../assets/images/team/1.jpg"
import team2  from "../../../../assets/images/team/2.jpg"
import team3  from "../../../../assets/images/team/3.jpg"
import { FaFacebookF, FaGithub, FaJsSquare,  } from "react-icons/fa";
const Team = () => {
    return (
        <div>
                <div className=" items-center text-center mt-10 mb-9">
                <h3 className="text-3xl text-red-400 font-bold">
                Meet Our Team
                </h3>
                <p>
                the majority have suffered alteration in some form, by injected humour, <br />
                or randomised words which do not look even slightly believable. 
                </p>
            </div>


            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">

            <div className="card w-80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={team1} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center ">
          <h2 className="card-title font-semibold text-2xl">Car Engine Plug</h2>
          <p className="text-xl text-orange-500 font-semibold">Engine Expert</p>
          <div className=" flex gap-2 text-2xl">
          <FaGithub></FaGithub> <FaJsSquare></FaJsSquare> <FaFacebookF></FaFacebookF>
          </div>
        
          
         
        </div>
      </div>
{/* 2 */}

<div className="card w-80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={team2} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center ">
          <h2 className="card-title font-semibold text-2xl">Car Engine Plug</h2>
          <p className="text-xl text-orange-500 font-semibold">Engine Expert</p>
          <div className=" flex gap-2 text-2xl">
          <FaGithub></FaGithub> <FaJsSquare></FaJsSquare> <FaFacebookF></FaFacebookF>
          </div>
        
          
         
        </div>
      </div>

      {/* 3 */}

      <div className="card w-80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={team3} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center ">
          <h2 className="card-title font-semibold text-2xl">Car Engine Plug</h2>
          <p className="text-xl text-orange-500 font-semibold">Engine Expert</p>
          <div className=" flex gap-2 text-2xl">
          <FaGithub></FaGithub> <FaJsSquare></FaJsSquare> <FaFacebookF></FaFacebookF>
          </div>
        
          
         
        </div>
      </div>
            </div>
        </div>
    );
};

export default Team;