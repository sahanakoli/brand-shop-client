

const LatestProduct = () => {
    return (
        <div className="mt-20">
            <h2 className=" text-3xl font-semibold text-center">Explore Latest Product</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto">
                    <div>
                    <img className="w-4/6 h-44 rounded-lg" src="https://i.ibb.co/2FkDGDZ/nike-p.jpg" alt="Shoes" />
                    </div>
                    <div>
                    <img className="w-4/6 h-44 rounded-lg" src="https://i.ibb.co/m4TkBkH/adidas-shoes.jpg" alt="Shoes" />
                    </div>
                    <div>
                    <img className="w-4/6 h-44 rounded-lg" src="https://i.ibb.co/rtgxsnZ/Gucci-product.jpg" alt="Shoes" />
                    </div>
                    <div>
                    <img className="w-4/6 h-44 rounded-lg" src="https://i.ibb.co/fqsmLd0/zara-p.jpg" alt="Shoes" />
                    </div>
                    <div>
                    <img className="w-4/6 h-44 rounded-lg" src="https://i.ibb.co/27S5yLK/hm.jpg" alt="Shoes" />
                    </div>
                    <div>
                    <img className="w-4/6 h-44 rounded-lg" src="https://i.ibb.co/9rfsFtL/levis.jpg" alt="Shoes" />
                    </div>
                    
                </div>
            </div>
    );
};

export default LatestProduct;