import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPagesWithSlugs, getPageBySlug, getConfig } from '../lib/api';
import Head from 'next/head';
import Header from '../components/header'
import Layout from '../components/layout'
import Container from '../components/container'
import PostTitle from '../components/post-title'


export default function Page({page, allSettingPost}) {
  console.log(page, allSettingPost)
  const  page_title = page?.title
  const page_content = page?.content
  const site_title = allSettingPost?.title
  return (
    <Layout preview="">
      <Container>
        <Header/ >
        <div className='flex flex-col p-10'>
          <Head>
            <title>{page_title}  | {site_title}</title>
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <PostTitle>{page_title}</PostTitle>
          <div
            className='text-base text-grey-darker'
            dangerouslySetInnerHTML={{ __html: page_content }}
          ></div>
        </div>
      </Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pagesWithSlugs = await getAllPagesWithSlugs();
  return {
    paths: pagesWithSlugs.edges.map(({ node }) => `/${node.slug}`) || [],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const page = await getPageBySlug(params.slug)
  const allSettingPost = await getConfig()
  return { 
    props: {page, allSettingPost},
    revalidate: 10,
  };
}
