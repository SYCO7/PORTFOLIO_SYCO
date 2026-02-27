import { ImageResponse } from "next/og";

export const alt = "Tanmoy Mondal cybersecurity portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          color: "#e2e8f0",
          backgroundColor: "#040507",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "#67e8f9",
            marginBottom: 20,
          }}
        >
          Cybersecurity Portfolio
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>Tanmoy Mondal</div>
        <div style={{ marginTop: 24, fontSize: 30, color: "#cbd5e1", maxWidth: 1020 }}>
          Ethical Hacking • Red Team • Penetration Testing
        </div>
      </div>
    ),
    size,
  );
}
