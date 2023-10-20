/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BrandProductCard = ({brand}) => {

    const {_id,name, brand_name, price,type,rating,photo} = brand;

    
    return (
        <div>
            <div className="mt-6 mb-8">
            <div className="card w-11/12 h-[300px] mx-auto card-side bg-base-100 shadow-xl">
                <figure><img className='h-full w-[300px]' src={photo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">Name: {name}</h2>
                    <h2 className="text-2xl font-medium">Brand Name: {brand_name}</h2>
                    <p className="text-base font-medium">Type: {type}</p>
                    <p className="text-base font-medium">Price: ${price}</p>
                    <p className="text-base font-medium">Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}><button className="btn btn-primary ">Details</button></Link>
                        <Link to={`/updateProduct/${_id}`}><button className="btn btn-primary ">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BrandProductCard;