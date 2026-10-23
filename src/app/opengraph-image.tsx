import { ImageResponse } from "next/og";

export const alt = "Recebecom — cobrança recorrente e judicial para condomínios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#3D0C16",
          color: "#F5EFEA",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 42, fontWeight: 700, letterSpacing: 1 }}>
          RECEBECOM
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ fontSize: 28, letterSpacing: 4, color: "#8A7F78" }}>
            COBRANÇA QUE GERA RESULTADOS
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05, marginTop: 24 }}>
            Cobrança para condomínios, da taxa mensal à via judicial.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
