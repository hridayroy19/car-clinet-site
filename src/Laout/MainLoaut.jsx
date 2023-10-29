import { Outlet } from "react-router-dom";
import NavBar from "../sheard/Navber/NavBar";
import Footer from "../sheard/Footer/Footer";
import { Toaster } from "react-hot-toast";


const MainLoaut = () => {
    return (
        <div>
          <div className="px-32 ">
          <NavBar></NavBar>
            <Outlet></Outlet>
            <Toaster/>
          </div>
          <div className=" mt-11">
          <Footer></Footer>
          </div>
        </div>
    );
};

export default MainLoaut;