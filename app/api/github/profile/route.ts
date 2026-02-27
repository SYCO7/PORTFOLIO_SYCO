import { NextResponse } from "next/server";

const GITHUB_USERNAME = "SYCO7";
const GITHUB_API_BASE = "https://api.github.com";

type GithubUserResponse = {
  login: string;
};

type GithubRepoResponse = {
  name: string;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string | null;
  language: string | null;
};

function getGithubHeaders() {
  const token = process.env.GITHUB_TOKEN;

  return {
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-syco-github-profile-telemetry",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export async function GET() {
  try {
    const headers = getGithubHeaders();
    const userUrl = `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`;
    const reposUrl = `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?per_page=100`;

    const [userResponse, reposResponse] = await Promise.all([
      fetch(userUrl, { headers, next: { revalidate: 300 } }),
      fetch(reposUrl, { headers, next: { revalidate: 300 } }),
    ]);

    if (!userResponse.ok) {
      const body = await userResponse.text();
      console.error("GitHub profile API error", { status: userResponse.status, body });
      throw new Error("Failed to fetch GitHub profile");
    }

    if (!reposResponse.ok) {
      const body = await reposResponse.text();
      console.error("GitHub repos API error", { status: reposResponse.status, body });
      throw new Error("Failed to fetch GitHub repositories");
    }

    const user = (await userResponse.json()) as GithubUserResponse;
    const repos = (await reposResponse.json()) as GithubRepoResponse[];

    const totalRepos = repos.length;
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

    const mostRecentRepo = repos
      .filter((repo) => repo.pushed_at)
      .sort((a, b) => new Date(b.pushed_at ?? 0).getTime() - new Date(a.pushed_at ?? 0).getTime())[0]?.name ?? null;

    const languageCounts = repos.reduce<Record<string, number>>((acc, repo) => {
      if (!repo.language) {
        return acc;
      }

      acc[repo.language] = (acc[repo.language] ?? 0) + 1;
      return acc;
    }, {});

    const primaryLanguages = Object.entries(languageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([language]) => language);

    return NextResponse.json({
      username: user.login || GITHUB_USERNAME,
      totalRepos,
      totalStars,
      totalForks,
      mostRecentRepo,
      primaryLanguages,
    });
  } catch (error) {
    console.error("GitHub profile telemetry route failure", error);
    return NextResponse.json({ error: "Failed to fetch GitHub profile telemetry" }, { status: 500 });
  }
}
