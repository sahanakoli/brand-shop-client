import Navbar from "../sheard/Navbar";


const NewBrand = () => {

    const handleBrand = e =>{
       e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const type = form.type.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;
        

        const newBrand = {name,brand_name, type,price,rating,details, photo}

        fetch('https://brand-shop-server-three.vercel.app/brandProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBrand)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleBrand}>
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
                
                {/* form photo Url row */}
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
                <div className="mb-8">
                <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                            </label>
                        </div>
                </div>
                <input type="submit" value="Add Brand" className="btn  bg-[#D2B48C] w-full text-black" />
            </form>
        </div>
    );
};

export default NewBrand;