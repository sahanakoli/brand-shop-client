/* eslint-disable react/prop-types */
import {RiDeleteBin5Line} from 'react-icons/ri'
import Swal from 'sweetalert2'


const ProductCard = ({ product, products, setProducts }) => {

    const {_id, name, brandName, type, price, description, rating, photo } = product;

    const handleDelete = _id =>{
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

                fetch(`http://localhost:5000/product/${_id}`,{
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
                console.log('delete confirmed')
            }
        })
    }
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
                        <button onClick={() => handleDelete(_id)} className="btn "><RiDeleteBin5Line></RiDeleteBin5Line></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;