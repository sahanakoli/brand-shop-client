/* eslint-disable no-undef */
import { useLoaderData } from "react-router-dom";
import Navbar from "../sheard/Navbar";
// import Swal from "sweetalert2";



const Details = () => {
    const productDetails = useLoaderData();
    console.log(productDetails);

    

    

    // const handleAddCart = _id =>{
    //     console.log(_id);
    //     fetch(`http://localhost:5000/brandProduct/${_id}`, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify()
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         if(data.insertedId){
    //             Swal.fire({
    //                 title: 'Success!',
    //                 text: 'Cart Added Successfully',
    //                 icon: 'success',
    //                 confirmButtonText: 'OK'
    //               })
    //         }
    //     })
    // }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className=" text-4xl mt-10 text-center">Product Details</h2>
            <div className=" flex justify-center items-center mt-16 ">
            <div className="card w-96 bg-base-100 shadow-xl">
                {/* <figure><img src={photo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddCart()} className="btn btn-primary">Add to Cart</button>
                    </div>
                </div> */}
            </div>
        </div>
        </div>
    );
};

export default Details;