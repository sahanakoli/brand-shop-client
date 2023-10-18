/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BrandCard = ({brand}) => {
    const {name, photo} = brand;
    return (
        <div>
            <Link to="/gucci">
            <div className="card w-full h-[400px] mx-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl font-semibold">Brand Name: {name}</h2>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default BrandCard;