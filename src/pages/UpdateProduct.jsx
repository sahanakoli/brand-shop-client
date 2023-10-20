
import { useLoaderData } from "react-router-dom";
import Navbar from "../sheard/Navbar";
import Swal from 'sweetalert2'

const UpdateProduct = () => {

    const product = useLoaderData();
    console.log(product);
    const handleUpdate = e =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const type = form.type.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        

        const updateProduct = {name,brand_name, type,price,rating, photo}
        console.log(updateProduct);

        // send data to the server
        fetch(`http://localhost:5000/brandProduct/${params._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

        
    }
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-base-200 shadow-lg p-24">
            <h2 className=" text-2xl font-semibold text-center">Update Product</h2>
            <form onSubmit={handleUpdate}>
                {/* form name  */}
                <div className="md:flex mb-8 mt-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand_name" placeholder="Brand_name" className="input input-bordered w-full" />
                            </label>
                        </div>
                </div>
                {/* type and price */}
                <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                
                {/* form rating and photo Url row */}
                <div className="md:flex mb-8">
                <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Submit" className="btn btn-primary w-full text-white" />
            </form>
        </div>
        </div>
    );
};

export default UpdateProduct;