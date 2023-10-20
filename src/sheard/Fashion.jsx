
const Fashion = () => {
    return (
        <div className=" flex justify-center items-center gap-16 mt-20  mx-auto">
            <div>
                <img className=" w-[550px] h-[750px] rounded-lg" src="https://i.ibb.co/yRrZ7r7/pic.png" alt="" />
            </div>
            <div>
                <h2 className=" text-4xl font-bold">Fashion is the Armor to<br/> Survive the Reality of<br/> Every Life</h2>
                <p className=" text-base font-normal mt-4">Embark on a fashion journey where tradition intertwines<br/> with innovation. Our eclectic assortment<br/> invites you to redefine your fashion narrative.<br/> From timeless classics to avant-garde designs,<br/> discover the freedom to express your<br/> individuality through the art of dressing.</p>
                <button className=" btn mt-4 text-red-400">Learn More</button>
            </div>
        </div>
    );
};

export default Fashion;