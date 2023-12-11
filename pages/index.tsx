import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome, getConfig, getMediaItems, getMenu } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Snowfall from 'react-snowfall'


export default function Index({ allPosts: { edges },  preview, allSetting, mediaItems, menuItems }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`${allSetting?.title} | ${allSetting?.description}`}</title>
      </Head>
      <Snowfall 
        color="red"
        // Applied to the canvas element
        style={{ background: '', position:'fixed' }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={200}
      />
      <Intro 
        logoImage = {mediaItems}
        allSetting = {allSetting}
        menuItems = {menuItems}
      />
      <Container>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)
  const allSetting = await getConfig()
  const mediaItems = await getMediaItems()
  const menuItems  = await getMenu()

  return {
    props: {allPosts, preview, allSetting, mediaItems, menuItems },
    revalidate: 10,
  }
}
