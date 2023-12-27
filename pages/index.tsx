import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getConfig, getMediaItems, getAllUser } from '../lib/api'
import Snowfall from 'react-snowfall'
import UserList from '../components/user-list'

export default function Index({  allSetting, mediaItems, users }) {

  return (
    <Layout preview={''}>
      <Head>
        <title>{`${allSetting?.title} | ${allSetting?.description}`}</title>
      </Head>
      {/* <Snowfall 
        color="red"
        // Applied to the canvas element
        style={{ background: '', position:'fixed' }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={200}
      /> */}
      <Intro 
        logoImage = {mediaItems}
        allSetting = {allSetting}
      />
      <Container>
        <UserList 
          users = {users}
        />
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({  }) => {
  const allSetting = await getConfig()
  const mediaItems = await getMediaItems()
  const users = await getAllUser()

  return {
    props: { allSetting, mediaItems, users },
    revalidate: 10,
  }
}
