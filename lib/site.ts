// The public address of the site. NEXT_PUBLIC_SITE_URL overrides it, for example when a custom domain is added.
const LIVE_URL = "https://akaskulkarni-portfolio.vercel.app";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || (process.env.NODE_ENV === "production" ? LIVE_URL : "http://localhost:3000")
).replace(/\/$/, "");
export const EMAIL = "akashkulkarni530@gmail.com";
export const GITHUB = "https://github.com/Akashk-08";
export const LINKEDIN = "https://www.linkedin.com/in/akash-kulkarni-aa371b182/";
export const RESUME = "/resume/Akash_Kulkarni_Resume.pdf";
