import { useLoaderData } from "react-router-dom";
import Footer from "../sheard/Footer";
import LatestProduct from "../sheard/LatestProduct";
import Navbar from "../sheard/Navbar";
import BrandCard from "../component/BrandCard";
import Banner from "../sheard/Banner";
import Fashion from "../sheard/Fashion";


const Home = () => {

    const brands = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
           <h2 className=" text-4xl font-bold text-center mt-20">Brands Category</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto mt-8">
           {
            brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
           }
           </div>
           <Fashion></Fashion>
           <LatestProduct></LatestProduct>
           <Footer></Footer> 
        </div>
    );
};

export default Home;