import { GoArrowUpRight } from "react-icons/go";


const BlogPost = () => {
    return (
        <div className="container mx-auto my-5 pt-20">
            <div className="flex justify-between">
                 <h2 className="text-4xl font-medium">From my blog post</h2>
                 <button className="py-3 px-6 rounded-[60px] bg-[#FD853A] text-white text-2xl">Send</button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 pt-12">
                <div>
                    <div className="relative">
                        <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725898373/Rectangle_6_olusbi.png" alt="" />
                          <div className=" p-2  bg-opacity-35  absolute -bottom-2 right-0">
                                  <button><GoArrowUpRight className="text-8xl bg-[#1D2939] p-5 text-white rounded-full"></GoArrowUpRight></button>
                         </div>
                    </div>
                    {/* icon bootom 0 */}
                   
                    <button className="py-2.5 px-5 bg-[#F2F4F7] rounded-[60px] mt-5">UI/ UX Design</button>
                    <ul className="flex gap-5 list-none mt-5">
                        <li  className="before:content-['•'] before:w-2 before:h-2 before:rounded-full before:text-theme_orange before:top-3  ">Jayesh Patil</li>
                        <li className="before:content-['•'] before:w-2 before:h-2 before:rounded-full before:text-theme_orange before:top-3 ">10 Nov, 2023</li>
                    </ul>
                    <p className="opacity-90 pt-5 text-xl">Design Unraveled: Behind the Scenes of UI/UX Magic</p>

                </div>
                <div>
                    <div className="relative">
                        <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725898455/Rectangle_6_1_wifxet.png" alt="" />
                        <div className=" p-2  bg-opacity-35  absolute -bottom-2 right-0">
                                  <button><GoArrowUpRight className="text-8xl bg-[#1D2939] p-5 text-white rounded-full"></GoArrowUpRight></button>
                         </div>
                    </div>
                    {/* icon bootom 0 */}
                   
                    <button className="py-2.5 px-5 bg-[#F2F4F7] rounded-[60px] mt-5">App Design</button>
                    <ul className="flex gap-5 list-none mt-5">
                        <li  className="before:content-['•'] before:w-2 before:h-2 before:rounded-full before:text-theme_orange before:top-3  ">Jayesh Patil</li>
                        <li className="before:content-['•'] before:w-2 before:h-2 before:rounded-full before:text-theme_orange before:top-3 ">9 Nov, 2023</li>
                    </ul>
                    <p className="opacity-90 pt-5 text-xl">Design Unraveled: Behind the Scenes of UI/UX Magic</p>

                </div>
                <div>
                    <div className="relative">
                        <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725897032/Rectangle_6_2_bpzjke.png" alt="" />
                        <div className=" p-2  bg-opacity-35  absolute bottom-0 right-0">
                                  <button><GoArrowUpRight className="text-8xl bg-[#1D2939] p-5 text-white rounded-full"></GoArrowUpRight></button>
                         </div>
                    </div>
                    {/* icon bootom 0 */}
                   
                    <button className="py-2.5 px-5 bg-[#F2F4F7] rounded-[60px] mt-5">App Design</button>
                    <ul className="flex gap-5 list-none mt-5">
                        <li  className="before:content-['•'] before:w-2 before:h-2 before:rounded-full before:text-theme_orange before:top-3  ">Jayesh Patil</li>
                        <li className="before:content-['•'] before:w-2 before:h-2 before:rounded-full before:text-theme_orange before:top-3 ">11 Nov, 2023</li>
                    </ul>
                    <p className="opacity-90 pt-5 text-xl">Design Unraveled: Behind the Scenes of UI/UX Magic</p>

                </div>
            </div>
            
        </div>
    );
};

export default BlogPost;