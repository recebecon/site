import { ServiceView } from "@/components/pages/service-view";
import { services } from "@/content/services";
import { createMetadata } from "@/lib/metadata";

const service = services[0];

export const metadata = createMetadata({
  title: service.title,
  description: service.summary,
  path: service.href,
});

export default function RecurringCollectionPage() {
  return <ServiceView service={service} />;
}
