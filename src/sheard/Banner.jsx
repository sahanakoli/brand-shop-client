

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/ZT4Nk6z/banner.webp)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold ">Discover Your Perfect Style</h1>
                        <p className="mb-5"></p>
                        <button className="btn ">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;