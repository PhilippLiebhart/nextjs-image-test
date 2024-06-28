import { groq } from 'next-sanity';

export const TeamMembersQuery = groq`
  *[_type == "teamMember" && !(_id in path('drafts.**'))] | order(order asc) {
    name,
    position,
    bio,
    skills,
    order,
    "imageUrl": image.asset->url,
    image,
    introductionVideo,
    "slug": slug.current,
    gallery[] {
      image {
        ...,
        asset-> {
          url
        }
      },
      description
    }
  }
`;
