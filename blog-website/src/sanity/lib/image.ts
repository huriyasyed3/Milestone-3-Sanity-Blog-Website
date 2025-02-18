import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SanityClient } from 'sanity';
import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId:'3odqw16b', dataset:'production' })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}


