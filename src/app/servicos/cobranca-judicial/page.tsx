import { ServiceView } from "@/components/pages/service-view";
import { services } from "@/content/services";
import { createMetadata } from "@/lib/metadata";

const service = services[1];

export const metadata = createMetadata({
  title: service.title,
  description: service.summary,
  path: service.href,
});

export default function JudicialCollectionPage() {
  return <ServiceView service={service} />;
}
