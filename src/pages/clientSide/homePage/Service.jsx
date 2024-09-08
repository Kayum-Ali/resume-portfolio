import { GoArrowUpRight } from "react-icons/go";


const Service = () => {
    return (
        <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1725820884/images_f6ecpy.jpg')] py-16 px-8 text-white  bg-contain rounded-2xl">
            <div className="container mx-auto">
                    <div className="flex justify-between">
                        <h2 className="text-5xl font-bold">My <span className="text-theme_orange">Service</span></h2>
                        <p className="text-xl font-medium opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis <br /> lacus nunc, posuere in justo vulputate, bibendum sodales </p>

                    </div>

                    <div className="flex gap-5 mt-16">
                          <div className="bg-gray-500 rounded-br-[100px] bg-opacity-30 rounded-3xl relative ">
                            <h2 className="text-2xl py-8 px-4">UI/ UX Design</h2>
                            <hr className="mb-8"/>
                            <div className="">
                                <img className="rounded-br-[100px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1725821755/Rectangle_7_2_qfpazd.png" alt="" />
                            </div>

                            <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1725820884/images_f6ecpy.jpg')] p-2 rounded-full bg-cover bg-opacity-35  absolute bottom-0 right-0">
                                  <button><GoArrowUpRight className="text-8xl bg-[#1D2939] p-5 rounded-full"></GoArrowUpRight></button>
                            </div>

                          </div>
                          <div className="bg-gray-500 rounded-br-[100px] bg-opacity-30 rounded-3xl relative ">
                            <h2 className="text-2xl py-8 px-4">Web Design</h2>
                            <hr className="mb-8"/>
                            <div className="">
                                <img className="rounded-br-[100px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1725822440/Rectangle_7_1_xarnh3.png" alt="" />
                            </div>

                            <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1725820884/images_f6ecpy.jpg')] p-2 rounded-full bg-cover bg-opacity-35  absolute bottom-0 right-0">
                                  <button><GoArrowUpRight className="text-8xl bg-[#1D2939] p-5 rounded-full"></GoArrowUpRight></button>
                            </div>

                          </div>
                          <div className="bg-gray-500 rounded-br-[100px] bg-opacity-30 rounded-3xl relative ">
                            <h2 className="text-2xl py-8 px-4">Landing Page</h2>
                            <hr className="mb-8"/>
                            <div className="">
                                <img className="rounded-br-[100px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1725821755/Rectangle_7_2_qfpazd.png" alt="" />
                            </div>

                            <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1725820884/images_f6ecpy.jpg')] p-2 rounded-full bg-cover bg-opacity-35  absolute bottom-0 right-0">
                                  <button><GoArrowUpRight className="text-8xl bg-[#1D2939] p-5 rounded-full"></GoArrowUpRight></button>
                            </div>

                          </div>
                        
                    </div>

            </div>
          
            
        </div>
    );
};

export default Service;