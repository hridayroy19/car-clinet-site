/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {img,title,price,_id}= service || {}
    return (
        <>
        <div className="card w-80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title font-semibold text-2xl">{ title}</h2>
          <p className="text-xl text-orange-500 font-semibold">price:${price}</p>
          <div className=" items-center text-end ">
            <Link to={`/book/${_id}`}>
            <button className="mr-7 btn bg-orange-300 "> <FaArrowRight></FaArrowRight> </button>
            </Link>
        </div>
        </div>
        
      </div>
      

     </>
    );
};

export default ServiceCard;