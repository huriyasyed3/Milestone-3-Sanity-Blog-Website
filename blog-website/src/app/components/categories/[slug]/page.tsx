import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import { createClient } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

// Sanity client setup
const client = createClient({
  projectId: "3odqw16b",
  dataset: "production",
  apiVersion: "2024-12-25",
  useCdn: false,
});

export default function CategoryPage({ posts, category }: { posts: any; category: any }) {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">{category.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <Link href={`/blog/${post.slug.current}`} key={post.slug.current}>
            <article className="p-5 bg-white rounded-lg border shadow-md hover:shadow-lg">
              {post.image && (
                <Image
                  src={urlFor(post.image).url()}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded"
                />
              )}
              <h3 className="mt-3 text-2xl font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600">
                {new Date(post.publishedAt).toDateString()}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Generate paths for all categories
export const getStaticPaths: GetStaticPaths = async () => {
  const query = groq`*[_type == "category"]{ slug }`;
  const categories = await client.fetch(query);

  const paths = categories.map((category: any) => ({
    params: { slug: category.slug.current },
  }));

  return { paths, fallback: false };
};




