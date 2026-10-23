import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { shareImage, site } from "@/content/site";

export const alt = shareImage.alt;
export const size = { width: shareImage.width, height: shareImage.height };
export const contentType = shareImage.type;

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const host = new URL(site.url).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#F5EFEA",
          color: "#3D0C16",
        }}
      >
        <div style={{ display: "flex", padding: "64px 72px 0" }}>
          <img src={logoSrc} width={392} height={82} alt="" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "flex-end",
            padding: "0 72px 56px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              color: "#6B1126",
              fontWeight: 700,
            }}
          >
            COBRANÇA QUE GERA RESULTADOS
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              marginTop: 20,
              maxWidth: 980,
            }}
          >
            Cobrança para condomínios, da taxa mensal à via judicial.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#3D0C16",
            color: "#F5EFEA",
            padding: "22px 72px",
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex" }}>{host}</div>
          <div style={{ display: "flex", color: "#E7D5D8" }}>
            Recorrente e judicial
          </div>
        </div>
      </div>
    ),
    size,
  );
}
