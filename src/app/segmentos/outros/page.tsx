import { SegmentView } from "@/components/pages/segment-view";
import { segments } from "@/content/segments";
import { createMetadata } from "@/lib/metadata";

const segment = segments[3];

export const metadata = createMetadata({
  title: "Outros empreendimentos",
  description: segment.summary,
  path: segment.href,
});

export default function OtherSegmentPage() {
  return <SegmentView segment={segment} />;
}
