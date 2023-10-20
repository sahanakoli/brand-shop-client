

const LatestProduct = () => {
    return (
        <div className="mt-10">
            <h2 className=" text-4xl font-semibold text-center">Explore Latest Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-8/12 mx-auto mt-16 mb-6">
                    <div>
                    <img className=" w-11/12 h-44 rounded-lg" src="https://i.ibb.co/2FkDGDZ/nike-p.jpg" alt="" />
                    </div>
                    <div>
                    <img className=" w-11/12 h-44 rounded-lg" src="https://i.ibb.co/rtgxsnZ/Gucci-product.jpg " alt="" />
                    </div>
                    <div>
                    <img className=" w-11/12 h-44 rounded-lg" src="https://i.ibb.co/m4TkBkH/adidas-shoes.jpg" alt="" />
                    </div>
                    <div>
                    <img className=" w-11/12 h-44 rounded-lg" src="https://i.ibb.co/fqsmLd0/zara-p.jpg" alt="" />
                    </div>
                    <div>
                    <img className=" w-11/12 h-44 rounded-lg" src="https://i.ibb.co/27S5yLK/hm.jpg" alt="" />
                    </div>
                    <div>
                    <img className=" w-11/12 h-44 rounded-lg" src="https://i.ibb.co/9rfsFtL/levis.jpg" alt="" />
                    </div>
                    
                </div>
            </div>
    );
};

export default LatestProduct;