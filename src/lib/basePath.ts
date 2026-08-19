// next/image and next/link auto-prepend basePath, but a plain <a href>
// (like the CV download link) doesn't. Wrap any hardcoded internal path
// (starting with "/") in this before using it in a raw href.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string) {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
