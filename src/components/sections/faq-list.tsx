import { faqs } from "@/content/faq";

export function FaqList() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((item) => (
        <details key={item.question} className="group py-1">
          <summary className="cursor-pointer list-none py-4 font-display text-xl font-semibold tracking-tight text-ink md:text-2xl [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-6">
              {item.question}
              <span aria-hidden="true" className="mt-1 text-accent group-open:hidden">
                +
              </span>
              <span aria-hidden="true" className="mt-1 hidden text-accent group-open:inline">
                –
              </span>
            </span>
          </summary>
          <p className="max-w-3xl pb-5 leading-7 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
