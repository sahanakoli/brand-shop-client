import BrandBanner from "../sheard/BrandBanner";
import Navbar from "../sheard/Navbar";


const BrandProduct = () => {
    return (
        <div>
            <Navbar></Navbar>
            <BrandBanner></BrandBanner>
           <h2 className=" text-4xl text-center mt-10">Brand Product</h2> 
        </div>
    );
};

export default BrandProduct;