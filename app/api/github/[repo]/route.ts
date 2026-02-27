import { NextResponse } from "next/server";

const GITHUB_USERNAME = "your-github-username";
const GITHUB_API_BASE = "https://api.github.com";

type GithubRepoApiResponse = {
  name: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  pushed_at: string | null;
  language: string | null;
  size: number;
};

type GithubLanguagesApiResponse = Record<string, number>;

type RouteContext = {
  params: Promise<{ repo: string }>;
};

function getGithubHeaders() {
  const token = process.env.GITHUB_TOKEN;

  return {
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-syco-github-telemetry",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export async function GET(_: Request, context: RouteContext) {
  try {
    const { repo } = await context.params;

    const encodedRepo = encodeURIComponent(repo);
    const repoUrl = `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${encodedRepo}`;
    const languagesUrl = `${repoUrl}/languages`;

    const [repoResponse, languagesResponse] = await Promise.all([
      fetch(repoUrl, {
        headers: getGithubHeaders(),
        next: { revalidate: 300 },
      }),
      fetch(languagesUrl, {
        headers: getGithubHeaders(),
        next: { revalidate: 300 },
      }),
    ]);

    if (!repoResponse.ok) {
      const errorBody = await repoResponse.text();
      console.error("GitHub repo API error", {
        status: repoResponse.status,
        repo: encodedRepo,
        body: errorBody,
      });
      throw new Error("Failed to fetch repository data");
    }

    const repoData = (await repoResponse.json()) as GithubRepoApiResponse;
    const languagesData = languagesResponse.ok
      ? ((await languagesResponse.json()) as GithubLanguagesApiResponse)
      : {};

    if (!languagesResponse.ok) {
      const languagesErrorBody = await languagesResponse.text();
      console.error("GitHub languages API error", {
        status: languagesResponse.status,
        repo: encodedRepo,
        body: languagesErrorBody,
      });
    }

    return NextResponse.json({
      name: repoData.name,
      stars: repoData.stargazers_count,
      forks: repoData.forks_count,
      issues: repoData.open_issues_count,
      lastCommit: repoData.pushed_at,
      primaryLanguage: repoData.language,
      size: repoData.size,
      languages: languagesData,
    });
  } catch (error) {
    console.error("GitHub telemetry route failure", error);
    return NextResponse.json({ error: "Failed to fetch GitHub repository data" }, { status: 500 });
  }
}
