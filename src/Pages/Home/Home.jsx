import About from "./Homes/AboutSection/About";
import Banner from "./Homes/Banner/Banner";
import Team from "./Homes/OuerTema/Team";
import Contace from "./Homes/contace/contace";
import Service from "./Homes/service/Service ";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <About></About>
          <Service></Service>
          <Contace></Contace>
          <Team></Team>
        </div>
    );
};

export default Home;