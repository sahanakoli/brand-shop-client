
const Fashion = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-24">Latest Brand Product Feature</h2>
            <div className=" flex-row md:flex-row lg:flex justify-center items-center gap-12  mx-auto">
            <div>
                <img className=" w-[550px] h-[750px] rounded-xl" src="https://i.ibb.co/yRrZ7r7/pic.png" alt="" />
            </div>
            <div className=" text-center lg:text-left">
                <h2 className=" text-4xl font-bold">Collection and Style<br/> for Everyone</h2>
                <p className=" text-base font-normal mt-4">Embark on a fashion journey where tradition intertwines<br/> with innovation. Our eclectic assortment invites you<br/> to redefine your fashion narrative.</p>
                <button className=" btn mt-6 text-red-400">Learn More</button>
            </div>
        </div>
        </div>
    );
};

export default Fashion;