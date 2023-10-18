import Footer from "../sheard/Footer";
import LatestProduct from "../sheard/LatestProduct";
import Navbar from "../sheard/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <h2>Home page</h2>
           <LatestProduct></LatestProduct>
           <Footer></Footer> 
        </div>
    );
};

export default Home;