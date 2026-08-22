/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: "https://www.sirajtech.work",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  changefreq: "monthly",
  priority: 1,
};
