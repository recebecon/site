import { faqs } from "@/content/faq";

export function FaqList() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((item) => (
        <details key={item.question} className="group py-1">
          <summary className="cursor-pointer list-none py-4 font-display text-xl font-semibold tracking-tight text-ink transition-colors duration-200 hover:text-accent md:text-2xl [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-6">
              {item.question}
              <span
                aria-hidden="true"
                className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-lg leading-none text-accent transition-transform duration-300 ease-out group-open:rotate-45"
              >
                +
              </span>
            </span>
          </summary>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr] motion-reduce:transition-none">
            <div className="overflow-hidden">
              <p className="max-w-3xl pb-5 leading-7 text-muted">{item.answer}</p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
