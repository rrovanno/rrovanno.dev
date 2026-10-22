
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/inyo",
        destination: "https://open.spotify.com/user/6xx4efmlp6sbftw3ozi17f7sk",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
