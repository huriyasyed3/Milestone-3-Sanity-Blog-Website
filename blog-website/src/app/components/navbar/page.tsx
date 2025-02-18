import React from 'react'
import { FiSearch, FiUser, FiMenu } from 'react-icons/fi'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '../../components/ui/sheet'

const Navbar = () => {
  return (
    
    <>
      {/* Header Section */}
      <div className="bg-white border-b-2 border-gray-300 px-6 py-2 flex items-center justify-between">
        {/* Heading for Mobile */}
        <p className='text-xl font-bold md:hidden text-gray-800  '>
        <span className='text-blue-600'>Blog</span>Spot
                    </p>
        
        {/* Icons for Desktop */}
        <div className="hidden md:flex items-center justify-between w-full">
         
           <h3 className="text-3xl text-black font-bold text-center flex-1">
           <span className='text-blue-600'>Blog</span>Spot
            </h3> 
          <div className="flex items-center space-x-4">
          <FiSearch size={24} className="hover:text-blue-500 cursor-pointer" />
            <div className="border border-black rounded-full p-1">
              <FiUser size={20} className="hover:text-blue-500 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Icons for Mobile */}
        <div className="flex items-center space-x-4 md:hidden">
          <FiSearch size={20} className="hover:text-blue-500 cursor-pointer" />
          <Sheet>
            <SheetTrigger>
              <FiMenu size={24} className="hover:text-blue-500 cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-xl font-bold">Blog</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-4">
                <Link href="/" className="text-gray-700 hover:text-black">
                  Home
                </Link>
                <Link href={`/components/about`} className="text-gray-700 hover:text-black">
                  About Us
                </Link>
                <Link href="/" className="text-gray-700 hover:text-black">
                  Blog
                </Link>
                <Link href={`/components/categories`} className="text-gray-700 hover:text-black">
                  Categories
                </Link>
                <Link href="/user" className="text-gray-700 hover:text-black">
                  Contact Us
                </Link>
               
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Navbar Links for Desktop */}
      <nav className="hidden md:flex justify-center bg-white py-4 ">
        <div className="flex space-x-8">
          <Link href="/" className=" text-gray-500 hover:text-black text-md">
           Home
          </Link>
          <Link href={`/components/about`} className="text-gray-500 hover:text-black text-md">
            About Us
          </Link>
          <Link href="/" className="text-gray-500 hover:text-black text-md">
           Blog
          </Link>
          <Link href={`/components/categories`} className="text-gray-500 hover:text-black text-md">
            Categories
          </Link>
          <Link href="/user" className="text-gray-500 hover:text-black text-md">
            Contact Us
          </Link>
          
          
        </div>
      </nav>
    </>
  )
}

export default Navbar