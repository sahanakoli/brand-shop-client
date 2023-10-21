

const BrandBanner = () => {
    return (
        <div>
            <div className="mt-10  w-11/12 mx-auto  lg:relative ">
                <div className="carousel w-full ">
                    <div id="slide1" className="carousel-item relative w-full ">
                        <div className="hero h-[600px] "style={{ backgroundImage: 'url(https://i.ibb.co/ggchj5T/banner-2.jpg)' }} >
                            <div className="hero-overlay bg-opacity-40"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className=" max-w-sm lg:max-w-xl">
                                    <h1 className="mb-5 text-5xl font-semibold">New Season New Style</h1>
                                    <p className="mb-5 text-xl font-medium">Discount Up To <span className="text-3xl text-orange-300">30%</span> Off</p>
                                    <button className="btn bg-red-400 border-none text-white">Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full ">
                        <div className="hero h-[600px] "style={{ backgroundImage: 'url(https://i.ibb.co/tz8N1ps/ban4.jpg)' }}>
                            <div className="hero-overlay bg-opacity-40"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-sm lg:max-w-xl">
                                <h1 className="mb-5 text-5xl font-semibold">New Season New Look</h1>
                                    <p className="mb-5 text-xl font-medium">Check The New Collection</p>
                                    <button className="btn bg-red-400 border-none text-white">See More</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full ">
                        <div className="hero h-[600px] "style={{ backgroundImage: 'url(https://i.ibb.co/z5pcg79/ban3.jpg)' }} >
                            <div className="hero-overlay bg-opacity-40"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className=" max-w-sm lg:max-w-xl">
                                    <h2 className="text-2xl mb-3 font-semibold">Special Offer</h2>
                                    <h1 className="mb-3 text-5xl font-bold">New Collection Sale</h1>
                                    <p className="text-2xl mb-3 "><span className="text-amber-400 text-3xl">50%</span> Off</p>
                                    <button className="btn bg-red-400 border-none text-white">Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full ">
                        <div className="hero h-[600px] "style={{ backgroundImage: 'url(https://i.ibb.co/t2sQYy5/ban.jpg)' }} >
                            <div className="hero-overlay bg-opacity-40"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-sm lg:max-w-xl">
                                <h3 className="mb-3 text-3xl font-medium">Super</h3>
                                    <h1 className="mb-5 text-5xl font-semibold">Winter Fashion Collection</h1>
                                    <p className="mb-5 text-3xl font-medium">Sale</p>
                                    <button className="btn bg-red-400 border-none text-white">Shop Now</button>  
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandBanner;