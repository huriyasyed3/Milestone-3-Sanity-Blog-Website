import Image from "next/image";
import React from "react";
import { getPostBySlug } from "@/sanity/sanity-utils";
import RenderBodyContent from "@/app/components/Blog/RenderBodyContent";
import { urlFor } from "@/sanity/lib/image";


const SingleBlogPage = async ({ params }: { params: any }) => {
  const post = await getPostBySlug(params.slug) as any
       
          return ( 
     
  <article className="my-10 md:ml-20 ml-4 mr-2 md:mr-20">
      <div className="mb-5">
        <h1 className="text-3xl  font-extrabold text-gray-800 leading-tight py-4  ">{post.title}</h1>
         {post.image && (
        <Image
          src={urlFor(post.image).width(1000).height(400).url()}
          alt={post.title}
          width={1000}
          height={400}
          className="object-cover"
        />
       )}   
        <p className="pb-1 ">
          <span className="font-medium">Published:</span>
          {new Date(post.publishedAt).toDateString()}
          <span className=" pl-2 font-medium">by </span>
          {post.author.name}
        </p>

        <p>{post.metadata}</p>
      </div>

      <article className="prose lg:prose-xl">
        <RenderBodyContent post={post} />
      </article>
    </article>


          )
} 



export default SingleBlogPage;





