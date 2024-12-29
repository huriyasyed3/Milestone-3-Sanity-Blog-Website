import { getPosts } from "@/sanity/sanity-utils";
import BlogItem from "@/app/components/Blog";
import { urlFor } from "@/sanity/lib/image";
export default async function Home() {
 
  const posts = await getPosts();
   
  
      return (
        
      
    <div className="py-5">
      {posts?.length > 0 ? (
        posts.map((post: any, i) => <BlogItem key={i} blog={post} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
    
        )

  
}
