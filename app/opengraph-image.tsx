/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kronews";
export const contentType = "image/png";

export default async function OG() {
  const sfPro = await fetch(
    new URL("./fonts/SF-Pro-Display-Medium.otf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black", // Changed background color to black
        }}
      >
        <img
          src={`https://${process.env.VERCEL_URL}/logo.png`}
          alt="Kronews Logo"
          tw="w-20 h-20 mb-4 opacity-95"
        />
        <h1
          style={{
            fontSize: "100px",
            fontFamily: "SF Pro",
            background:
              "linear-gradient(to bottom right, #ffffff 21.66%, #78716c 86.47%)", // Adjusted gradient for better visibility on black background
            backgroundClip: "text",
            color: "transparent",
            lineHeight: "5rem",
            letterSpacing: "-0.02em",
          }}
        >
          Precedent
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "SF Pro",
          data: sfPro,
        },
      ],
    },
  );
}
