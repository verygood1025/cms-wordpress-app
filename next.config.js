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
  staticPageGenerationTimeout:1000,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['0.gravatar.com','secure.gravatar.com','linkbio.com.vn','ui-avatars.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '0.gravatar.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'linkbio.com.vn',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        port: '',
        pathname: '**',
      }
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      }
    }
    return config;
  }
}