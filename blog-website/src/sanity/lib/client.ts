import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId } from '../env'

export  const client = createClient({
  projectId:'3odqw16b',
  dataset:'production',
  apiVersion:'2024-12-25',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


const builder = imageUrlBuilder(client);

export function urlFor (source :any) {
  return builder.image(source).url(); // Local server ka URL generate karein
}
export default client;

export const fetchCategories = async () => {
  const query = `
    *[_type == "category"]{
      title,
      description,
      slug,
      image
    //  "image": image.asset->url
    }
  `;
  return await client.fetch(query);
  
};

// Fetch posts by category slug
export const fetchPostsByCategory = async (slug: string) => {
  const query = `
    *[_type == "post" && $slug in categories[]->slug.current]{
      title,
      mainImage,
      body,
      "author": author->name,
      metadata
    }
  `;
  return await client.fetch(query, { slug });
};
