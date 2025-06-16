import { defineConfig, isDev } from 'sanity'
import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial'

// Hent verdiene fra .env
const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET

export default defineConfig({
  name: 'default',
  title: 'sanity',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool(), ...(isDev ? [getStartedPlugin()] : [])],

  schema: {
    types: schemaTypes,
  },
})
