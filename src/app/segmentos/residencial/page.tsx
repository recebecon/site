import { SegmentView } from "@/components/pages/segment-view";
import { segments } from "@/content/segments";
import { createMetadata } from "@/lib/metadata";

const segment = segments[0];

export const metadata = createMetadata({
  title: "Condomínios residenciais",
  description: segment.summary,
  path: segment.href,
});

export default function ResidentialSegmentPage() {
  return <SegmentView segment={segment} />;
}
