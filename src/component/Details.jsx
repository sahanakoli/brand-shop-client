/* eslint-disable no-undef */
import { useLoaderData } from "react-router-dom";
import Navbar from "../sheard/Navbar";
import Swal from "sweetalert2";



const Details = () => {
    const productDetails = useLoaderData();
    console.log(productDetails);

    const {name, photo,brand_name,type, description, price,rating} = productDetails;

    

    const handleAddCart = (cart) =>{

        const name = cart.name;
        const brand_name = cart.brand_name;
        const type = cart.type;
        const price = cart.price;
        const rating = cart.rating;
        const photo = cart.photo;

        const addCart = {name, brand_name,type,price,rating,photo};
        console.log(addCart)

        fetch('https://brand-shop-server-three.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCart)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Cart Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className=" text-4xl font-semibold mt-10 text-center">Product Details</h2>
            <div className=" flex justify-center items-center mt-12 mb-6 ">
            <div className="card w-3/12  mx-auto bg-base-100 shadow-xl">
                <figure><img className=" w-3/4 h-[200px]" src={photo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-semibold">name: {name}</h2>
                    <h2 className="card-title text-2xl font-semibold">name: {brand_name}</h2>
                    <p className="text-lg font-medium">Price: ${price}</p>
                    <p className="text-lg font-medium">Type: {type}</p>
                    <p className="text-lg font-medium">Rating: {rating}</p>
                    <p><span className="text-lg font-medium">Description</span>: {description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddCart(productDetails)} className="btn btn-primary mt-2 text-white">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Details;