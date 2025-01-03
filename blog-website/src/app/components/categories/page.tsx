// import React from 'react';
// import { fetchCategories } from '../../../sanity/lib/client';
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image';
// import Link from 'next/link';
// import { Button } from '../ui/button';

// const  CategoriesPage = async () => {
//   const categories = await fetchCategories();
//   if (!categories || categories.length === 0) {
//     return <div>No categories found</div>;
    
//   }

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Categories</h1>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         {categories.map((category: any, index: number) => (
//           <div key={category.id || `category-${index}`} className="border p-4 shadow-lg">
//             <Image
//               src={
//                 category.image
//                   ? urlFor(category.image).width(400).height(300).url()
//                   : '/placeholder-image.png'  
//               }
//               alt={category.title || 'No title available'}
//               width={400}
//               height={300}
//               className="w-full h-40 object-cover rounded-md mb-2"
//             />
//             <h2 className="text-lg font-semibold">{category.title}</h2>
//             <p className="text-gray-600">{category.description}</p>
//             {/* <Link href={`/category/${category.slug}`} passHref>
//               <Button className=" mt-2 px-4 py-2 bg-blue-500 text-white rounded">
//                 View Posts
//               </Button>
//             </Link> */}
//             <Link href={`/categories/${category.slug.current}`} passHref>
//   <Button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
//     View Posts
//   </Button>
// </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CategoriesPage



import React from 'react';
import { fetchCategories } from '../../../sanity/lib/client';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const CategoriesPage = async () => {
  const categories = await fetchCategories();
  if (!categories || categories.length === 0) {
    return <div>No categories found</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {categories.map((category: any, index: number) => (
          <div key={category._id || `category-${index}`} className="border p-4 shadow-lg">
            <Image
              src={
                category.image
                  ? urlFor(category.image).width(400).height(300).url()
                  : '/placeholder-image.png'  
              }
              alt={category.title || 'No title available'}
              width={400}
              height={300}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h2 className="text-lg font-semibold">{category.title}</h2>
            <p className="text-gray-600">{category.description}</p>
            <Link href={`/categories/${category.slug.current}`} passHref>
              <Button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                View Posts
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
