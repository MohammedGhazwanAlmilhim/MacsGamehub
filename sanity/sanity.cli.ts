import { defineCliConfig } from 'sanity/cli'

// Bruk miljøvariabler
export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
})
