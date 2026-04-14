import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "radial-gradient(circle at top left, rgba(20,146,255,0.35), transparent 34%), radial-gradient(circle at bottom right, rgba(232,179,107,0.24), transparent 28%), linear-gradient(135deg, #06070b, #0d1426 62%, #111b37)",
          color: "white",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "999px",
            padding: "12px 20px",
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#7ed8ff"
          }}
        >
          Rick Broider
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 860 }}>
          <div style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 700 }}>
            Your vision is not broken.
            <br />
            Your business architecture is.
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.4, color: "rgba(255,255,255,0.82)" }}>
            Digital transformation consulting and live regenerative business rebuilds for founders and
            visionaries.
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
