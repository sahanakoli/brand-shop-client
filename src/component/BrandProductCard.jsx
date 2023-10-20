/* eslint-disable react/prop-types */


const BrandProductCard = ({brand}) => {

    const {name, brand_name, price,type,rating,photo} = brand;

    // const remaining = brands.filter(bran => bran.brand_name !== brand_name);
    // setBrands(remaining);

    
    return (
        <div>
            <h2 className=" text-2xl">card</h2>
            <div className="mt-6 mb-8">
            <div className="card w-11/12 mx-auto card-side bg-base-100 shadow-xl">
                <figure><img className='h-full w-[300px]' src={photo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">Name: {name}</h2>
                    <h2 className="text-2xl font-medium">Brand Name: {brand_name}</h2>
                    <p className="text-base font-medium">Type: {type}</p>
                    <p className="text-base font-medium">Price: {price}</p>
                    <p className="text-base font-medium">Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary ">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BrandProductCard;