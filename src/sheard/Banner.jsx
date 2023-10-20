

const Banner = () => {
    return (
        <div>
            <div className="hero w-11/12 mx-auto h-[450px] mt-6" style={{ backgroundImage: 'url(https://i.ibb.co/ZT4Nk6z/banner.webp)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 text-6xl font-bold ">Discover Your Perfect Style</h1>
                        <p className=" text-base font-medium">Discover the latest trends, from elegant classics<br/> to bold, contemporary looks. Elevate your fashion game <br/> with our curated collection.</p>
                        <p className="mb-5"></p>
                        <button className="btn ">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;