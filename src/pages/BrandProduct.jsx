// import { useLoaderData } from "react-router-dom";
import BrandBanner from "../sheard/BrandBanner";
import Navbar from "../sheard/Navbar";
// import BrandProductCard from "../component/BrandProductCard";


const BrandProduct = () => {
    // const brands = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <BrandBanner></BrandBanner>
           <h2 className=" text-4xl text-center mt-10">Brand Product</h2> 
           {/* <div>
            {
                brands.map(brand => <BrandProductCard key={brand._id} brand={brand}></BrandProductCard>)
            }
           </div> */}
        </div>
    );
};

export default BrandProduct;