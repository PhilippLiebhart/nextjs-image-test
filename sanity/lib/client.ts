import { createClient } from 'next-sanity';

import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  apiVersion:'2024-05-04',
  dataset:'production',
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn:false,
  stega: {
    enabled: false,
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || process.env.SANITY_STUDIO_URL,
  },
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  console.log('source', source);

  

  return builder.image(source);
}
