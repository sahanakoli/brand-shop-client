import { useLoaderData } from "react-router-dom";
import BrandBanner from "../sheard/BrandBanner";
import Navbar from "../sheard/Navbar";
import { useState } from "react";
import BrandProductCard from "../component/BrandProductCard";


const BrandProduct = () => {
    const loadedbrands = useLoaderData();
    const [brands,setBrands] = useState(loadedbrands)
    return (
        <div>
            <Navbar></Navbar>
            <BrandBanner></BrandBanner>
           <h2 className=" text-4xl text-center mt-10">Brand Product: {brands.length}</h2> 
           <div>
            {
                brands.map(brand => <BrandProductCard key={brand._id} brand={brand} brands={brands} setBrands={setBrands}></BrandProductCard>)
            }
           </div>
        </div>
    );
};

export default BrandProduct;