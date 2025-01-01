import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
const FooterPage = () => {
    return (
        <>
            <div className='bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start md:p-20'>
                <div className='p-5'>
                    <ul>
                        <p className='text-gray-800 font-bold text-3xl pb-6'>
                            <span className='text-blue-600'>Blog</span>Spot
                        </p>
                        <div className='flex gap-6 pb-5'>
                            <FaInstagram className='text-2xl cursor-pointer hover:text-pink-600' />
                            <FaFacebook className='text-2xl cursor-pointer hover:text-blue-600' />
                            <FaTwitter className='text-2xl cursor-pointer hover:text-blue-600' />
                            <FaLinkedin className='text-2xl cursor-pointer hover:text-blue-600' />
                        </div>
                    </ul>
                </div>
                <div className='p-5'>
                    <ul>
                        <p className='text-gray-800 font-bold text-2xl pb-4'>Quick Links</p>
                        <Link href='/' className='hover:underline  '>
                            <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                                Home
                            </li>
                        </Link>
                        <Link href='/components/about' className='hover:underline  '>
                            <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                                About
                            </li>
                        </Link>
                        <Link href='/component/cetegories' className='hover:underline  '>
                            <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                                Categories
                            </li>
                        </Link>
                        <Link href='/user' className='hover:underline'>
                            <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className='p-5'>
                    <ul>
                        <p className='text-gray-800 font-bold text-2xl pb-4'>Contact</p>

                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                            Email: blogspot123@gmail.com
                        </li>

                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                            Phone: 000-333-111
                        </li>


                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                            Address: 123 Blog Street, Blogtown
                        </li>


                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                            Login
                        </li>

                    </ul>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center p-5 bg-gray-50'>
                <h1 className='text-gray-800 font-semibold text-sm md:text-xl'>
                    © 2021-2022 All rights reserved | Build with ❤ by{" "}
                    <span className='hover:text-blue-600 font-semibold cursor-pointer'>
                        BlogSpot{" "}
                    </span>
                </h1>
            </div>
        </>
    )
}

export default FooterPage