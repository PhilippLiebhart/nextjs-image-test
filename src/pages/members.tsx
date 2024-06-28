import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { client, urlFor } from '../../sanity/lib/client';
import { TeamMembersQuery } from '../../sanity/team-members-query';
import Layout from '@/components/Layout';

const TeamPage = ({ teamMembers }: any) => {
  console.log('teamMembers', teamMembers);

  const memberWithImages = teamMembers.filter((member: any) => member?.image?.asset);

  console.log('memberWithImages', memberWithImages.length);

  return (
    <Layout>
      <div className='container mx-auto content-body'>
        <div className='grid grid-cols-12 gap-y-12 md:gap-12 w-full border-0 border-red-500'>
          {memberWithImages.map((member: any, idx: number) => {
            if (!member?.image?.asset) return null;
            return (
              <div key={idx} className='col-span-full md:col-span-4'>
                <Link href={`/team/${member.slug}`} className='flex flex-col items-center'>
                  {member?.image?.asset && (
                    <Image
                      src={urlFor(member?.image ?? '')
                        .width(400)
                        .quality(80)
                        .url()}
                      alt={member.name ?? ''}
                      width={400}
                      height={400}
                      className='rounded-[28px] aspect-square object-cover'
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const teamMembers = await client.fetch(TeamMembersQuery);

  return {
    props: {
      teamMembers,
    },
    revalidate: 10, // In seconds
  };
}

export default TeamPage;
