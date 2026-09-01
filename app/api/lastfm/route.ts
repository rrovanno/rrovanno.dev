import { NextResponse } from "next/server";
import { Vibrant } from "node-vibrant/node";

export async function GET() {
  const apiKey = process.env.LASTFM_API_KEY;
  const username = process.env.LASTFM_USERNAME;

  if (!apiKey || !username) {
    return NextResponse.json(
      { error: "Missing Last.fm environment variables" },
      { status: 500 }
    );
  }

  const params = new URLSearchParams({
    method: "user.getrecenttracks",
    user: username,
    api_key: apiKey,
    format: "json",
    limit: "1",
  });

  try {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?${params.toString()}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
    const errorText = await response.text();

    console.error(
        "Last.fm request failed:",
        response.status,
        response.statusText,
        errorText
    );

    return NextResponse.json(
        {
        error: "Last.fm request failed",
        status: response.status,
        details: errorText,
        },
        {
        status: response.status,
        }
    );
    }

    const data = await response.json();
    const track = data.recenttracks?.track?.[0];

    if (!track) {
      return NextResponse.json(
        { error: "No recent track found" },
        { status: 404 }
      );
    }

    const nowPlaying =
      track["@attr"]?.nowplaying === "true";

    const images = track.image ?? [];

    const albumArt =
      images.find(
        (image: { size: string }) =>
          image.size === "extralarge"
      )?.["#text"] ||
      images.at(-1)?.["#text"] ||
      "";

    // Default atmosphere colors
    let colors = {
      primary: "#8b5cf6",
      secondary: "#3b82f6",
      accent: "#ec4899",
    };

    // Extract palette from album artwork
    if (albumArt) {
      try {
        const imageResponse = await fetch(albumArt);

        if (imageResponse.ok) {
          const imageBuffer = Buffer.from(
            await imageResponse.arrayBuffer()
          );

          const palette = await Vibrant
            .from(imageBuffer)
            .getPalette();

          colors = {
            primary:
              palette.Vibrant?.hex ??
              colors.primary,

            secondary:
              palette.DarkVibrant?.hex ??
              palette.Muted?.hex ??
              colors.secondary,

            accent:
              palette.LightVibrant?.hex ??
              palette.LightMuted?.hex ??
              colors.accent,
          };
        }
      } catch (error) {
        console.error(
          "Album color extraction failed:",
          error
        );
      }
    }

    return NextResponse.json({
      title: track.name,
      artist: track.artist?.["#text"] ?? "",
      album: track.album?.["#text"] ?? "",
      albumArt,
      nowPlaying,
      url: track.url,
      colors,
    });
  } catch (error) {
    console.error("Last.fm error:", error);

    return NextResponse.json(
      { error: "Failed to fetch Last.fm data" },
      { status: 500 }
    );
  }
}