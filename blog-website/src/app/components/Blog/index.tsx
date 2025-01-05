import { Blog } from '@/types/blog';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { urlFor } from "@/sanity/lib/image";
import { getPostBySlug } from "@/sanity/sanity-utils";
import { Button } from '../ui/button';
const BlogItem = async ({ blog }: { blog: any }) => {
  const post = await getPostBySlug(blog.slug) as any;

  

  return (
    <>
   <div className='p-4 h-full flex flex-col justify-between' >
    <Link
      href={`/blog/${blog.slug.current}`}
      // className="block p-5 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 my-8"
      className='block'
    >
        <div className="h-[200px] w-full relative">
           <Image
            src={urlFor(blog.image).width(300).height(200).url()} // Generates the image URL
            alt={blog.title}
            layout='fill'
            className=" object-cover rounded-md "
          />
          </div>
        
        
        <h3 className="mt-4 mb-2 text-lg font-semibold text-gray-800 truncate">
          {blog.title}
        </h3>
       
        <p className="text-sm text-gray-600 mb-2">
          {new Date(blog.publishedAt).toDateString()}
        </p>
        
        <p className="text-sm text-gray-600 line-clamp-3">
          {blog.metadata.slice(0, 140)}...
        </p>

       <Link href={`/blog/${blog.slug.current}`}>
       <Button className='bg-blue-500 hover:bg-blue-400 text-white w-full mt-4 '>Read More</Button></Link> 
     
      </Link>
      </div>
    </>
  );
};

export default BlogItem;

