import Navbar from "../sheard/Navbar";

const Product = () => {

    const handleProduct = e =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;

        const brandItem = {name, photo}
        console.log(brandItem);

        // send data to the server

        fetch('http://localhost:5000/brand', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(brandItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleProduct}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8 mt-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Brand Name" className="input input-bordered w-full" />
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
                <input type="submit" value="Add Brand" className="btn  bg-[#D2B48C] w-full text-black" />
            </form>
        </div>
    );
};

export default Product;