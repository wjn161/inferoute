import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Route every prompt to the best open model";
  const description =
    searchParams.get("description") ??
    "OpenAI-compatible AI gateway for open models";
  const brand = searchParams.get("brand");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #0a0a1a 0%, #111133 50%, #0d1b2a 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          {/* Logo mark — simplified SVG-like shape using divs */}
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #6A00FF, #17CBE8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                background: "transparent",
                borderRight: "12px solid white",
                borderTop: "8px solid transparent",
                borderBottom: "8px solid transparent",
                marginLeft: "-4px",
              }}
            />
          </div>
          <span
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            inferoute
          </span>
          {brand && (
            <span
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.5)",
                marginLeft: "8px",
                paddingLeft: "16px",
                borderLeft: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {brand}
            </span>
          )}
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: title.length > 50 ? "52px" : "64px",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: 0,
            maxWidth: "900px",
          }}
        >
          {title}
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.5,
            marginTop: "24px",
            maxWidth: "800px",
          }}
        >
          {description}
        </p>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #6A00FF, #3652FF, #11A7F1, #17CBE8)",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
