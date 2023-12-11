if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL
)

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['0.gravatar.com','secure.gravatar.com','linkbio.com.vn'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '0.gravatar.com',
        pathname: '*',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        pathname: '*',
      },
      {
        protocol: 'https',
        hostname: 'linkbio.com.vn',
        pathname: '*',
      }
    ],
  },
}