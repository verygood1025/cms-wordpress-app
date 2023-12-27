import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllUserWithSlug, getUserBySlug, getVcard } from '../lib/api';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/legacy/image'
// Component
import Layout from '../components/layout'
import Avatar from '../components/avatar'
import UserProfile from '../components/user-profile'
import ListContact from '../components/list-contact'



export default function BioInfo({user,vcard,copyText}) {
  // Bio
  const site_title = 'Card Visit Online'
  const homeSetting = user?.homeSetting
  const infoSetting = user?.infoSetting
  const username = user?.username
  const infoNormal = homeSetting?.infoNormal
  const fullName = infoNormal?.fullName ? infoNormal.fullName : username
  const backgroundImg = infoNormal?.backgroundImg?.node.sourceUrl ? infoNormal?.backgroundImg?.node.sourceUrl : 'https://linkbio.com.vn/wp-content/uploads/2023/11/photo_2023-04-03_01-09-03-4-480x168.jpg'
  // Contact
  const contactLink = homeSetting?.contactLink

  // Social
  const socialLink = homeSetting?.socialLink

  // Styles
  const customStyle = user?.customStyle?.customStyle
  const bgColor = customStyle?.bgColor
  const bgImage = customStyle?.bgImage?.node?.sourceUrl
  const bgTransparent = customStyle?.bgTransparent
  const borderColor = customStyle?.borderColor
  const fieldGroupName = customStyle?.fieldGroupName
  const hoverColor = customStyle?.hoverColor
  const mainColor = customStyle?.mainColor
  const textColor = customStyle?.textColor
  const textHoverColor = customStyle?.textHoverColor

  return (
    <Layout preview="">
      <Head>
        <title>{fullName}  | {site_title}</title>
        <link rel='icon' href='/favicon.ico' ></link>
      </Head>
      <div id="bio-wrap" className='w-screen min-h-screen bg-[image:var(--bg-body)] bg-cover bg-no-repeat bg-center p-5' style={{
            ['--bg-color' as any]: bgColor,
            ['--bg-image' as any]: `url('${bgImage}')`,
            ['--border-color' as any]: borderColor,
            ['--main-color' as any]: mainColor,
            ['--hover-color' as any]: hoverColor,
            ['--text-color' as any]: textColor,
            ['--text-hover-color' as any]: textHoverColor
      }}>
        <div className='bio-container w-[525px] max-w-full max-h-full mx-auto my-0 [&_*]:transition-all [&_*]:duration-300'>
          <Tabs>
            <div className="row bio-box rounded-[var(--border-radius)] border-[color:var(--border-color)] bg-[image:var(--bg-image)] bg-[var(--bg-color)] bg-cover bg-center border-[10px] border-solid" id="row-1294429738">
              <div id="col-1001918773" className="col bio-nav small-12 large-12 bg-[var(--bg-color)] p-0 m-0 p-2.5">
                <div className="col-inner text-center">
                  <TabList className="list-setting flex flex-wrap justify-center items-center m-0 p-0 list-none">
                    <Tab className="list-item" data-id="home-setting">BIO</Tab>
                    <Tab className="list-item" data-id="info-setting">THÔNG TIN</Tab>
                    <Tab className="list-item" data-id="image-setting">ẢNH</Tab>
                    <Tab className="list-item" data-id="video-setting">Video</Tab>
                    <Tab className="list-item" data-id="product-setting">SẢN PHẨM</Tab>
                    <Tab className="list-item" data-id="news-setting">TIN TỨC</Tab>
                  </TabList>
                </div>
              </div>
              <div id="col-1604246144" className="col bio-content small-12 large-12 p-5 backdrop-blur-[5px] bg-transparent">
                <div className="col-inner">
                  <div className="content-setting-box">
                    <TabPanel className="content-item home-setting">
                      <div className="home-head-top relative overflow-hidden h-[168px] -mt-5 mb-0 -mx-5">
                        <Image 
                        priority
                        src={backgroundImg} 
                        alt={`Background of ${fullName}`}
                        layout='fill'
                        objectFit='cover'
                        sizes={''}
                        />
                      </div>
                      <div className="home-info relative border-b-[color:var(--hover-color)] mb-5 pb-5 border-b-2 border-dashed">
                        <Avatar username={username} fullName={fullName} infoNormal={infoNormal}></Avatar>
                        <UserProfile username={username} fullName={fullName} infoNormal={infoNormal} vcard={vcard} />
                      </div>
                      <div className="home-contact border-b-[color:var(--hover-color)] mb-5 pb-5 border-b-2 border-dashed">
					              <ListContact username={username} contactLink={contactLink} socialLink={socialLink}/>
                      </div>
                    </TabPanel>
                    <TabPanel className="content-item info-setting">
                    </TabPanel>
                    <TabPanel className="content-item image-setting">
                    </TabPanel>
                    <TabPanel className="content-item video-setting">
                    </TabPanel>
                    <TabPanel className="content-item product-setting">
                    </TabPanel>
                    <TabPanel className="content-item news-setting">
                    </TabPanel>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const userWithSlugs = await getAllUserWithSlug();
  return {
    paths: userWithSlugs.edges.map(({ node }) => `/${node.username}`) || [],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const user = await getUserBySlug(params.slug)
  const vcard = await getVcard(params.slug)
  return { 
    props: {user,vcard},
    revalidate: 10,
  };
}
