import { ImageResponse } from "next/og";
import type { ReactElement } from "react";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogRuntime = "edge";

type OgParams = {
  kicker?: string;
  title: string;
  subtitle?: string;
};

export function renderServiceOg({
  kicker = "Alverna · Cluj-Napoca",
  title,
  subtitle = "Clinică stomatologică premium",
}: OgParams): Promise<Response> {
  const node: ReactElement = (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 64,
        background:
          "radial-gradient(circle at 80% 20%, rgba(78,112,68,0.55), transparent 55%), linear-gradient(135deg, #0a0a0a 0%, #141414 50%, #0f1115 100%)",
        color: "#ffffff",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 14,
          padding: "10px 22px",
          border: "1px solid rgba(255,255,255,0.22)",
          borderRadius: 999,
          background: "rgba(0,0,0,0.32)",
          fontSize: 18,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#9fc48f",
          fontWeight: 500,
          width: "fit-content",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: 10,
            height: 10,
            borderRadius: 999,
            background: "#9fc48f",
          }}
        />
        {kicker}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <p
          style={{
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.62)",
            margin: 0,
          }}
        >
          {subtitle}
        </p>
        <h1
          style={{
            fontSize: title.length > 18 ? 96 : 132,
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: -4,
            margin: 0,
            maxWidth: 1050,
          }}
        >
          {title}
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "rgba(255,255,255,0.7)",
          fontSize: 22,
        }}
      >
        <span style={{ display: "inline-block" }}>alvernadental.com</span>
        <span style={{ display: "inline-block" }}>★ 4.8 · 9000+ pacienți</span>
      </div>
    </div>
  );

  return Promise.resolve(new ImageResponse(node, { ...ogSize }));
}
