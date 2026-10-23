import { SegmentView } from "@/components/pages/segment-view";
import { segments } from "@/content/segments";
import { createMetadata } from "@/lib/metadata";

const segment = segments[2];

export const metadata = createMetadata({
  title: "Galpões industriais",
  description: segment.summary,
  path: segment.href,
});

export default function IndustrialSegmentPage() {
  return <SegmentView segment={segment} />;
}
