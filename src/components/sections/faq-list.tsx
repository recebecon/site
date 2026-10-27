import { faqs } from "@/content/faq";

export function FaqList() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((item) => (
        <details key={item.question} className="group py-1">
          <summary className="cursor-pointer list-none py-3.5 font-display text-base font-semibold tracking-tight text-ink transition-colors duration-200 hover:text-accent sm:py-4 sm:text-lg md:text-xl [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-3 sm:gap-5">
              {item.question}
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-base leading-none text-accent transition-transform duration-300 ease-out group-open:rotate-45 sm:mt-1 sm:h-7 sm:w-7"
              >
                +
              </span>
            </span>
          </summary>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr] motion-reduce:transition-none">
            <div className="overflow-hidden">
              <p className="max-w-3xl pb-4 text-sm leading-6 text-muted sm:pb-5 sm:text-base sm:leading-7">
                {item.answer}
              </p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
