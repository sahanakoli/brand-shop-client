import Navbar from "../sheard/Navbar";
import Swal from 'sweetalert2'


const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const productItem = {name, brandName, type, price, description, rating, photo}
        console.log(productItem);

        // send data to the server
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })
    } 

    return (
        <div>
            <Navbar></Navbar>
            <div className=" bg-base-200 shadow-lg p-24">
                <h2 className=" text-3xl font-bold text-center ">Add Product</h2>
                <form onSubmit={handleAddProduct}>
                    {/* form name and brand name row */}
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
                                <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full" />
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
                    {/* form description and rating */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form photo Url row */}
                    <div className=" mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Product" className="btn btn-neutral w-full text-white" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;