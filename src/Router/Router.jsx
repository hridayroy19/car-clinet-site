import { createBrowserRouter } from "react-router-dom";
import MainLoaut from "../Laout/MainLoaut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Siginup from "../Pages/Login/Siginup";
import BookService from "../Pages/BookService/BookService";
import Booked from "../Pages/Booking/Booked";
import PrivetRoute from "./PrivetRoute";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLoaut></MainLoaut>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signUp",
                element:<Siginup></Siginup>
            },
          
            {
                path: "/book/:id",
                element:<BookService></BookService>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path :"/bookings",
                element:<PrivetRoute><Booked></Booked></PrivetRoute>
            },
            
        ]
    }
])
export default Router;