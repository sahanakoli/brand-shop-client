/* eslint-disable react/prop-types */
import Swal from 'sweetalert2'


const ProductCard = ({ product, products, setProducts }) => {

    const { _id, name, brand_name, type, price, rating, photo } = product;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://brand-shop-server-three.vercel.app/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remaining = products.filter(prod => prod._id !== _id);
                            setProducts(remaining);
                        }

                    })
            }
        })
    }
    return (
        <div className="mt-8 mb-8">
            <div className="card w-10/12 mx-auto card-side bg-base-100 shadow-xl">
                <figure><img className='h-full w-[300px]' src={photo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">Name: {name}</h2>
                    <h2 className="text-2xl font-medium">Brand Name: {brand_name}</h2>
                    <p className="text-base font-medium">Type: {type}</p>
                    <p className="text-base font-medium">Price: ${price}</p>
                    <p className="text-base font-medium">Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary text-white ">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;