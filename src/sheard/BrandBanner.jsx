

const BrandBanner = () => {
    return (
        <div>
            {/* <div className="carousel w-11/12 mx-auto mt-8 ml-16 h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/ggchj5T/banner-2.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-left text-neutral-content">
                            <div>
                                <h1 className="mb-5 text-6xl font-bold ">Discover Your Perfect Style</h1>
                                <p className="mb-5"></p>
                                <button className="btn ">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/tz8N1ps/ban4.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/z5pcg79/ban3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/t2sQYy5/ban.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}



            <div className="mt-10  w-11/12 mx-auto  lg:relative ">
                <div className="carousel w-full ">
                    <div id="slide1" className="carousel-item relative w-full ">
                        <div className="hero h-[600px] "style={{ backgroundImage: 'url(https://i.ibb.co/ggchj5T/banner-2.jpg)' }} >
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className=" max-w-sm lg:max-w-xl">
                                    <h1 className="mb-5 text-5xl font-semibold">New Season New Style</h1>
                                    <p className="mb-5 text-xl font-medium">Discount Up To 30%</p>
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
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-sm lg:max-w-xl">
                                <h1 className="mb-5 text-5xl font-semibold">New Season New Look</h1>
                                    <p className="mb-5 text-xl font-medium">Check The New Collection</p>
                                    <button className="btn bg-red-400 border-none text-white">Check</button>
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
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className=" max-w-sm lg:max-w-xl">
                                    <h1 className="mb-5 text-5xl font-semibold">Winter Fashion</h1>
                                    <p className="mb-5 text-xl font-medium">Discount Up To 30%</p>
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
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-sm lg:max-w-xl">
                                <h1 className="mb-5 text-5xl font-semibold">Fashion Sale Offer</h1>
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