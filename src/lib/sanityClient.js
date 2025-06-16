import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  apiVersion: process.env.REACT_APP_SANITY_API_VERSION,
  token: process.env.REACT_APP_SANITY_TOKEN,
  useCdn: false,
  ignoreBrowserTokenWarning: true,
});

export default sanityClient;
