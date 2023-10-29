import { useContext, useEffect, useState,  } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow";



const Booked = () => {
    const { user} =useContext(AuthContext);
const [ bookings , setBookings]=useState([]);

    const  url =`http://localhost:5000/bookings?email=${user?.email}`
     useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data=>setBookings(data));
     },[]);
    return (
        <div>
           <div>
            <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            
                            <th>Date</th>
                            <th>Price</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                              
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
        </div>
    );
};

export default Booked;