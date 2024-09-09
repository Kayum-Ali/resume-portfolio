

const HireMe = () => {
    return (
        <div className="bg-[#F2F4F7]">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 py-16 px-12">
                    <div>
                        <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725824831/Mask_group_fnnhif.png" alt="" />
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-6xl font-medium">Why <span className="text-theme_orange">Hire me</span>?</h2>
                        <p className="lg:w-2/3  font-medium text-xl text-[#AEB6C4]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p>
                        <div className="flex justify-between w-2/3">
                            <div>
                                <h2 className="text-2xl font-bold">450+</h2>
                                <p className="text-[#AEB6C4]">Project Completed</p>
                            </div>
                            <div>
                                <h2  className="text-2xl font-bold">450+</h2>
                                <p className="text-[#AEB6C4]">Project Completed</p>
                            </div>
                        </div>
                        <button className="py-5 px-8 border border-black rounded-2xl text-2xl font-medium">Hire me</button>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default HireMe;