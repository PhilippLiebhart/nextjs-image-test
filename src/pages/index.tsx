import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { client, urlFor } from '../../sanity/lib/client';
import { TeamMembersQuery } from '../../sanity/team-members-query';
import Layout from '@/components/Layout';

const TeamPage = ({ teamMembers }: any) => {
  return (
    <Layout>
      <div className='container mx-auto content-body'>
        <div className='grid grid-cols-12 gap-y-12 md:gap-12 w-full border-0 border-red-500'>
          {teamMembers.map((member: any, idx: number) => {
            return (
              <div key={idx} className='col-span-full md:col-span-4'>
                <Link href={`/team/${member.slug}`} className='flex flex-col items-center'>
                  <Image
                    src={urlFor(member?.image ?? '')
                      .width(400)
                      .quality(80)
                      .url()}
                    // src={member.imageUrl ?? ''}
                    // loader={({ width, quality = 100 }) => {
                    //   if (!member?.image) return 'https://via.placeholder.com/400';
                    //   return urlFor(member?.image ?? '')
                    //     .width(width)
                    //     .quality(quality)
                    //     .url();
                    // }}
                    alt={member.name ?? ''}
                    width={400}
                    height={400}
                    className='rounded-[28px] aspect-square object-cover'
                  />
                  <h3 className='text-[30px] font-spaceBold mt-8'>{member.name}</h3>
                  <p className='text-textGray'>{member.position}</p>
                </Link>
              </div>
            );
          })}
          {teamMembers.map((member: any, idx: number) => {
            return (
              <div key={idx} className='col-span-full md:col-span-4'>
                <Link href={`/team/${member.slug}`} className='flex flex-col items-center'>
                  <Image
                    src={urlFor(member?.image ?? '')
                      .width(400)
                      .quality(80)
                      .url()}
                    // src={member.imageUrl ?? ''}
                    // loader={({ width, quality = 100 }) => {
                    //   if (!member?.image) return 'https://via.placeholder.com/400';
                    //   return urlFor(member?.image ?? '')
                    //     .width(width)
                    //     .quality(quality)
                    //     .url();
                    // }}
                    alt={member.name ?? ''}
                    width={400}
                    height={400}
                    className='rounded-[28px] aspect-square object-cover'
                  />
                  <h3 className='text-[30px] font-spaceBold mt-8'>{member.name}</h3>
                  <p className='text-textGray'>{member.position}</p>
                </Link>
              </div>
            );
          })}
          {teamMembers.map((member: any, idx: number) => {
            return (
              <div key={idx} className='col-span-full md:col-span-4'>
                <Link href={`/team/${member.slug}`} className='flex flex-col items-center'>
                  <Image
                    src={urlFor(member?.image ?? '')
                      .width(400)
                      .quality(80)
                      .url()}
                    // src={member.imageUrl ?? ''}
                    // loader={({ width, quality = 100 }) => {
                    //   if (!member?.image) return 'https://via.placeholder.com/400';
                    //   return urlFor(member?.image ?? '')
                    //     .width(width)
                    //     .quality(quality)
                    //     .url();
                    // }}
                    alt={member.name ?? ''}
                    width={400}
                    height={400}
                    className='rounded-[28px] aspect-square object-cover'
                  />
                  <h3 className='text-[30px] font-spaceBold mt-8'>{member.name}</h3>
                  <p className='text-textGray'>{member.position}</p>
                </Link>
              </div>
            );
          })}
          {teamMembers.map((member: any, idx: number) => {
            return (
              <div key={idx} className='col-span-full md:col-span-4'>
                <Link href={`/team/${member.slug}`} className='flex flex-col items-center'>
                  <Image
                    src={urlFor(member?.image ?? '')
                      .width(400)
                      .quality(80)
                      .url()}
                    // src={member.imageUrl ?? ''}
                    // loader={({ width, quality = 100 }) => {
                    //   if (!member?.image) return 'https://via.placeholder.com/400';
                    //   return urlFor(member?.image ?? '')
                    //     .width(width)
                    //     .quality(quality)
                    //     .url();
                    // }}
                    alt={member.name ?? ''}
                    width={400}
                    height={400}
                    className='rounded-[28px] aspect-square object-cover'
                  />
                  <h3 className='text-[30px] font-spaceBold mt-8'>{member.name}</h3>
                  <p className='text-textGray'>{member.position}</p>
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

  console.log('teamMembers', teamMembers);

  return {
    props: {
      teamMembers,
    },
  };
}

export default TeamPage;
