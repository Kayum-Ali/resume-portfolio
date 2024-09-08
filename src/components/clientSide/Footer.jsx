
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaWhatsappSquare, FaYoutubeSquare } from 'react-icons/fa'
import { GoArrowUpRight } from 'react-icons/go'
import { IoSend } from 'react-icons/io5'

const Footer = () => {
    return (
        <div>
            <footer className=" bg-theme_black text-white p-10">

                <div className="lg:flex space-y-2 justify-between items-center mt-8 w-full">
                    <p className='lg:text-5xl text-3xl  font-bold'>Let&apos;s Connect There</p>
                    <button className='bg-theme_orange px-5 py-3 rounded-2xl text-2xl flex items-center gap-2'>Hire Me <GoArrowUpRight /></button>
                </div>

                <div className="border border-white w-full opacity-30 mt-16 mb-8"></div>

                <div className='lg:flex gap-5 space-y-5'>
                    <div className=' lg:w-1/3  space-y-5'>
                        <div className="flex items-center gap-3 ">
                        <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725814749/imagesa_1_ygjmqe.png"
                                        type="image/x-icon" className="w-12 bg-green-600 p-2 rounded-full" alt="" />
                            <span className="font-bold text-2xl">₭𝒂ყ𝔲𝙢</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, omnis! Totam, odio voluptatem iste animi dolorum quae! Earum voluptatibus deserunt quasi, velit saepe aut ullam reiciendis dolorem necessitatibus sapiente aperiam, nemo autem quas dignissimos?</p>
                        <div className='flex text-2xl gap-1'>
                            <FaFacebookSquare />
                            <FaYoutubeSquare />
                            <FaInstagramSquare />
                            <FaTwitterSquare />
                            <FaWhatsappSquare />
                            <FaLinkedin />

                        </div>
                    </div>

                    <div className=' lg:w-1/3 flex justify-evenly'>
                        <div className="">
                            <p className='text-theme_orange font-bold text-xl mb-3'>Navigation</p>
                            <ul className='space-y-1'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Service</li>
                                <li>Resume</li>
                                <li>Project</li>
                            </ul>
                        </div>
                        <div className="">
                            <p className='text-theme_orange font-bold text-xl mb-3'>Contact</p>
                            <ul className='space-y-1'>
                                <li>+880 2342346346346</li>
                                <li>ashikur@gmail.com</li>
                                <li>ashikur.com</li>

                            </ul>
                        </div>
                    </div>
                    <div className=' lg:w-1/3'>
                        <div className="">
                            <p className='text-theme_orange font-bold text-xl mb-3'>Get latest information</p>

                            <div className='flex'>
                                <label className="input input-bordered rounded-r-none flex items-center gap-2">
                                    <input type="text" className="grow" placeholder="Search" />
                                </label>
                                <div className='bg-theme_orange p-3 items-center flex text-2xl rounded-r-lg'><IoSend /></div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer