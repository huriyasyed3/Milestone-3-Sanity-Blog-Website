import React from "react";
import { getPostBySlug } from "@/sanity/sanity-utils";
import RenderBodyContent from "@/app/components/Blog/RenderBodyContent";

import { urlFor } from "@/sanity/lib/image";

const SingleBlogPage = async ({ params }: { params: any }) => {
  const post = await getPostBySlug(params.slug) as any
  
  return (
    <article className="my-10">
      <div className="mb-5">
        <h1 className="text-3xl py-2">{post.title}</h1>
        {post.mainImage && (
        <img
          src={urlFor(post.mainImage).width(800).url()}
          alt={post.title}
        />
      )}
        <p className="pb-1">
          <span className="font-medium">Published:</span>
          {new Date(post.publishedAt).toDateString()}
          <span className="font-medium pl-2">by </span>
          {post.author.name}
        </p>

        <p>{post.metadata}</p>
      </div>

      <article className="prose lg:prose-xl">
        <RenderBodyContent post={post} />
      </article>
    </article>
  );
};

export default SingleBlogPage;