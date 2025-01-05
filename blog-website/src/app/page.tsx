import { getPosts } from "@/sanity/sanity-utils";
import BlogItem from "@/app/components/Blog";

export default async function Home() {
   const posts = await getPosts();
     return (
        <>      
<div className="flex flex-wrap gap-4 justify-center py-5">
  {posts?.length > 0 ? (
    posts.map((post: any, i) => (
      <div key={i}
      //  className="w-full md:w-1/4">
              className="w-[300px] h-[450px] bg-white border border-gray-200  hover:bg-blue-50 shadow-lg rounded-lg overflow-hidden">
   
        <BlogItem blog={post} />
      </div>
    ))
  ) : (
    <p>No posts found</p>
  )}
</div>
    </>
        )
}
