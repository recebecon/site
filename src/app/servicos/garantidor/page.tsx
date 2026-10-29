import { GarantidorView } from "@/components/pages/garantidor-view";
import { garantidorService } from "@/content/garantidor";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: garantidorService.title,
  description: garantidorService.summary,
  path: garantidorService.href,
});

export default function GarantidorPage() {
  return <GarantidorView />;
}
