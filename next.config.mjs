/** @type {import('next').NextConfig} */
const repo = "andreeva-camp";
const isProd = process.env.NODE_ENV === "production";
const noBase = process.env.NO_BASE_PATH === "1";
const basePath = isProd && !noBase ? `/${repo}` : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
