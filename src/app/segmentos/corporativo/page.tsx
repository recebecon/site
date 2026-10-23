import { SegmentView } from "@/components/pages/segment-view";
import { segments } from "@/content/segments";
import { createMetadata } from "@/lib/metadata";

const segment = segments[1];

export const metadata = createMetadata({
  title: "Condomínios corporativos",
  description: segment.summary,
  path: segment.href,
});

export default function CorporateSegmentPage() {
  return <SegmentView segment={segment} />;
}
