/* eslint-disable react/prop-types */


const ProductCard = ({ product }) => {

    const { name, brandName, type, price, description, rating, photo } = product;
    return (
        <div className="mt-6 mb-8">
            <div className="card w-9/12 mx-auto bg-base-100 shadow-xl">
                <figure><img src={photo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <h2 className="text-2xl font-medium">Brand Name: {brandName}</h2>
                    <p className="text-base font-medium">Type: {type}</p>
                    <p className="text-base font-medium">Price: {price}</p>
                    <p className="text-base font-medium">Description: {description}</p>
                    <p className="text-base font-medium">Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;