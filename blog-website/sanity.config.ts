'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig, SanityClient} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import schemas from '@/sanity/schemas'
import {structure} from './src/sanity/structure'

// import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'


export default defineConfig({
  basePath: '/studio',
  projectId:'3odqw16b',
  dataset:'production',
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema:{ types: schemas },
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})

