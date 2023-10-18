// import { useLoaderData } from "react-router-dom";
import Navbar from "../sheard/Navbar";


const MyCart = () => {

    // const products = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-2xl">Cart page</h2>
            <div>
                {/* {
                    products.map()
                } */}
            </div>
        </div>
    );
};

export default MyCart;