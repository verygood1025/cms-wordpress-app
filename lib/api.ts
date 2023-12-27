const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query = '', { variables }: Record<string, any> = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getConfig() {
  const data = await fetchAPI(
    `
    query getConfig {
      generalSettings {
        title
        description
      }
    }`
  )
  return data?.generalSettings
}

export async function  getMediaItems() {
  const data = await fetchAPI(
    `
    query getMedia {
      mediaItems(where: {name: "logo-web"}) {
        nodes {
          mediaItemUrl
          mediaDetails {
            height
            width
          }
          title
        }
      }
    }`
  )
  return data?.mediaItems?.nodes[0]
}

export async function getAllUser() {
  const data = await fetchAPI(`
  query getAllUser {
    users(first: 10000,where: {role: CUSTOMER, orderby: {field: REGISTERED, order: DESC}}) {
      edges {
        node {
          id
          username
          homeSetting {
            infoNormal {
              fullName
              company
              position
              userIcon {
                node {
                  sourceUrl
                }
              }
              backgroundImg {
                node {
                  sourceUrl
                }
              }
            }
            contactLink {
              phoneNumber
            }
          }
        }
      }
    }
  }
  `);
  return data?.users;
}

export async function getAllUserWithSlug() {
  const data = await fetchAPI(`
  query getAllUserWithSlug {
    users(where: {role: CUSTOMER}) {
      edges {
        node {
          username
        }
      }
    }
  }
  `);
  return data?.users;
}

export async function getUserBySlug(username) {
  const data = await fetchAPI(`
  query getUser {
    user(id: "${username}", idType: USERNAME) {
      email
      name
      username
      homeSetting {
        contactLink {
          address
          email
          phoneNumber
          turnOnSms
        }
        infoNormal {
          fullName
          backgroundImg {
            node {
              sourceUrl
            }
          }
          userIcon {
            node {
              sourceUrl
            }
          }
          company
          position
        }
        socialLink {
          facebook
          instagram
          messenger
          momo {
            maQrMomo {
              node {
                sourceUrl
              }
            }
            momoPhone
          }
          nganHang {
            maQrNganHang {
              node {
                sourceUrl
              }
            }
            soTaiKhoan
            tenNganHang
          }
          telegram
          tiktok
          twiter
          website
          youtube
          zalo {
            zaloPhone
            zaloQr {
              node {
                sourceUrl
              }
            }
          }
        }
      }
      infoSetting {
        bioInfo
        imageList {
          popup {
            node {
              sourceUrl
            }
          }
          thumb {
            node {
              sourceUrl
            }
          }
        }
        news {
          content
          title
          image {
            node {
              sourceUrl
            }
          }
        }
        product {
          buy
          content
          price
          tenNutDTHang
          title
          image {
            node {
              sourceUrl
            }
          }
        }
        videoList {
          fieldGroupName
          videoLink
        }
      }
      customStyle {
        customStyle {
          bgColor
          bgImage {
            node {
              sourceUrl
            }
          }
          bgTransparent
          borderColor
          fieldGroupName
          hoverColor
          mainColor
          textColor
          textHoverColor
        }
      }
    }
  }
  `);
  return data?.user;
}

export async function getVcard(username) {
  const response = await fetch(`https://linkbio.com.vn/wp-json/wp/v2/getVcard?username=${username}`);
  const vcard = await response.json();
  return vcard;
}