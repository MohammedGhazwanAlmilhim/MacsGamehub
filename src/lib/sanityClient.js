import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'kkvckrni',
  dataset: 'production',
  apiVersion: '2023-05-17',
  token: 'sk63aSxuVWZA65ttTljpVlfE0EMBHmgVgGuEDGbBoUB2JxAYDJwjde6haPEdxXAFjnky4rS3WkujXK30Y3KLHQ0gwW8AbR2AVm50efhbxy5edJEYHaizOkLovrUU4O7VIIYMYmKXmVpie0BvxvUXari7qq0y94wT9nEajgwgjKif5TQVB3a6',
  useCdn: false,
  ignoreBrowserTokenWarning: true,
});

export default sanityClient;