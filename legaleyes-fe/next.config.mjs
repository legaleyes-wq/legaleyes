/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enforce ESLint and TypeScript correctness during builds
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable Next Image optimization (configure domains if remote images are used)
  images: {
    unoptimized: false,
    // domains: ["example.com"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // Note: A strict CSP should be tailored to runtime usage; start conservative in infra or iterate later
          // { key: "Content-Security-Policy", value: "default-src 'self'; img-src 'self' data: blob:; script-src 'self'; style-src 'self' 'unsafe-inline'; connect-src 'self'; font-src 'self' data:; frame-ancestors 'self';" },
        ],
      },
    ]
  },
}

export default nextConfig
