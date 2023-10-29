
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service  = () => {
    const [service , setService]= useState([]);


    useEffect (()=>{
        fetch("http://localhost:5000/services")
        .then(res =>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            <div className=" items-center text-center mt-10 mb-9">
                <h3 className="text-3xl text-red-400 font-bold">
                Our Service Area
                </h3>
                <p>
                the majority have suffered alteration in some form, by injected humour, or randomised <br />
                 words which do not look even slightly believable. 
                </p>
            </div>
<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
   {
    service.map(service=><ServiceCard key={service._id} service={service} ></ServiceCard>)
   }
</div>


<div className=" ">
        <h3 className="  mx-auto mt-7 text-orange-500 font-semibold w-32 text-center py-2 px-2 border mb-12" > More Services </h3>
      </div>
        </div>
    );
};

export default Service ;