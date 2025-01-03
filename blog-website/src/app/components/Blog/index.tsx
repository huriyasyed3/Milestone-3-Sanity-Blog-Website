import { Blog } from '@/types/blog';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { urlFor } from "@/sanity/lib/image";
import { getPostBySlug } from "@/sanity/sanity-utils";

const BlogItem = async ({ blog }: { blog: any }) => {
  const post = await getPostBySlug(blog.slug) as any;

  

  return (
    <Link
      href={`/blog/${blog.slug.current}`}
      className="block p-5 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 my-8"
    >
      <article>
        {/* Check if post.image exists */}
        {post?.image ? (
          <Image
            src={urlFor(post.image).width(700).height(500).url()} // Generates the image URL
            alt={post?.title || "Blog Image"}
            width={700}
            height={500}
            className=" object-cover "
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">No Image Available</p>
          </div>
        )}
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-700">
          {blog.title}
        </h3>
        <p className="mb-3 font-normal text-sm text-gray-600">
          {new Date(blog.publishedAt).toDateString()}
        </p>
        <p className="mb-3 font-normal text-gray-600">
          {blog.metadata.slice(0, 140)}...
        </p>
      </article>
    </Link>
  );
};

export default BlogItem;

