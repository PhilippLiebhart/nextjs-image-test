import { groq } from 'next-sanity';

export const TeamMembersQuery = groq`
 *[_type == "blogPost"] | order(releaseDate desc) {
 
    image {
      ...,
       
        },
  
   
  }
`;
