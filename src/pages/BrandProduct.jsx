import { useLoaderData } from "react-router-dom";
import Navbar from "../sheard/Navbar";
import BrandProductCard from "../component/BrandProductCard";
import BrandBanner from "../sheard/BrandBanner";


const BrandProduct = () => {
    const brands = useLoaderData();
    
    return (
        <div>
            <Navbar></Navbar>
            <BrandBanner></BrandBanner>
           <h2 className=" text-4xl font-semibold text-center mt-10">Brand Products</h2> 
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
            {
                brands.map(brand => <BrandProductCard key={brand._id} brand={brand} ></BrandProductCard>)
            }
           </div>
        </div>
    );
};

export default BrandProduct;