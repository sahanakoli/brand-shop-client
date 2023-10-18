import { useLoaderData } from "react-router-dom";
import Navbar from "../sheard/Navbar";
import ProductCard from "../component/ProductCard";
import { useState } from "react";


const MyCart = () => {

    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts);
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {
                    products.map(product => <ProductCard key={product._id} product={product} setProducts={setProducts}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;