import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "Missing GitHub token" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      "https://api.github.com/repos/rrovanno/Atlas",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${token}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: {
          revalidate: 300,
        },
      }
    );

    if (!response.ok) {
      console.error(
        "GitHub request failed:",
        response.status,
        response.statusText
      );

      return NextResponse.json(
        { error: "GitHub request failed" },
        { status: response.status }
      );
    }

    const repo = await response.json();

    return NextResponse.json({
    name: repo.name,
    description: repo.description,
    pushedAt: repo.pushed_at,
    url: repo.html_url,
    private: repo.private,
    updatedAt: repo.updated_at,
    });
  } catch (error) {
    console.error("GitHub error:", error);

    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}