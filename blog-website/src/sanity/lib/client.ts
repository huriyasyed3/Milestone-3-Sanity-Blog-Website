import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:'3odqw16b',
  dataset:'production',
  apiVersion:'v2021-3-25',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
