const fallbackUrl = "https://portfolio-syco.vercel.app";

function normalizeSiteUrl(rawUrl?: string) {
  if (!rawUrl) {
    return fallbackUrl;
  }

  const withProtocol = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;

  try {
    return new URL(withProtocol).origin;
  } catch {
    return fallbackUrl;
  }
}

export const siteConfig = {
  name: "Tanmoy Mondal | Cybersecurity Portfolio",
  description:
    "Cybersecurity portfolio highlighting ethical hacking, red team workflows, penetration testing practice, and secure engineering projects.",
  keywords: [
    "cybersecurity",
    "ethical hacking",
    "red team",
    "penetration testing",
    "offensive security",
    "bug bounty",
    "security operations",
    "threat modeling",
    "application security",
    "network security",
    "SOC",
    "security research",
  ],
  author: "Tanmoy Mondal",
  githubUrl: "https://github.com/SYCO7",
  siteUrl: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL),
};
