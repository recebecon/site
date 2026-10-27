"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials, type Testimonial } from "@/content/testimonials";
import { Container } from "@/design-system/ui/container";
import { SectionHeading } from "@/design-system/ui/section";
import { cx } from "@/lib/cx";

export function Testimonials() {
  const count = testimonials.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const busyRef = useRef(false);
  const [index, setIndex] = useState(count);
  const [step, setStep] = useState(0);
  const [animate, setAnimate] = useState(true);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>("[data-card]");
    if (cards.length < 2) return;
    const nextStep = cards[1].offsetLeft - cards[0].offsetLeft;
    if (nextStep > 0) setStep(nextStep);
  }, []);

  useEffect(() => {
    if (count === 0) return;
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [count, measure]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || count === 0) return;

    function onTransitionEnd(event: TransitionEvent) {
      if (event.target !== track || event.propertyName !== "transform") return;

      busyRef.current = false;

      if (index >= count * 2) {
        setAnimate(false);
        setIndex(index - count);
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => setAnimate(true));
        });
        return;
      }

      if (index < count) {
        setAnimate(false);
        setIndex(index + count);
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => setAnimate(true));
        });
      }
    }

    track.addEventListener("transitionend", onTransitionEnd);
    return () => track.removeEventListener("transitionend", onTransitionEnd);
  }, [count, index]);

  if (count === 0) return null;

  const slides = [...testimonials, ...testimonials, ...testimonials];
  const active = ((index % count) + count) % count;

  function go(direction: -1 | 1) {
    if (busyRef.current || step === 0) return;
    busyRef.current = true;
    setAnimate(true);
    setIndex((current) => current + direction);
  }

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20" aria-labelledby="depoimentos-titulo">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <SectionHeading
            id="depoimentos-titulo"
            eyebrow="Depoimentos"
            title="Quem administra fala da cobrança."
            description="Relatos de síndicos e administradoras sobre a régua e a via judicial."
          />
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <CarouselButton label="Depoimento anterior" onClick={() => go(-1)}>
              <ChevronIcon direction="prev" />
            </CarouselButton>
            <CarouselButton label="Próximo depoimento" onClick={() => go(1)}>
              <ChevronIcon direction="next" />
            </CarouselButton>
          </div>
        </div>
      </Container>

      <div className="relative mt-6 sm:mt-8 lg:mt-10">
        <div
          id="depoimentos-carrossel"
          className="overflow-hidden px-4 sm:px-5 md:px-8"
          aria-roledescription="carrossel"
          aria-label="Depoimentos"
        >
          <div
            ref={trackRef}
            className={cx(
              "flex gap-4",
              animate && "transition-transform duration-500 ease-out motion-reduce:transition-none",
            )}
            style={{ transform: step ? `translate3d(-${index * step}px, 0, 0)` : undefined }}
          >
            {slides.map((item, slideIndex) => (
              <TestimonialCard
                key={`${item.name}-${slideIndex}`}
                item={item}
                active={slideIndex % count === active}
              />
            ))}
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white via-white/90 to-transparent sm:w-24 md:w-32 lg:w-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white via-white/90 to-transparent sm:w-24 md:w-32 lg:w-40"
        />
      </div>
    </section>
  );
}

function CarouselButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-controls="depoimentos-carrossel"
      onClick={onClick}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors duration-200 hover:bg-paper hover:text-accent"
    >
      {children}
    </button>
  );
}

function ChevronIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === "prev" ? (
        <path d="M15 6 9 12l6 6" />
      ) : (
        <path d="m9 6 6 6-6 6" />
      )}
    </svg>
  );
}

function TestimonialCard({ item, active }: { item: Testimonial; active: boolean }) {
  return (
    <figure
      data-card=""
      aria-hidden={!active || undefined}
      className="flex w-[min(78vw,19rem)] shrink-0 flex-col rounded-card border border-line bg-white p-5 sm:w-[21rem] sm:p-6"
    >
      <blockquote className="flex-1">
        <p className="font-display text-base leading-7 font-medium tracking-tight text-ink sm:text-lg sm:leading-8">
          “{item.quote}”
        </p>
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
        <Image
          src={item.image}
          alt={active ? item.imageAlt : ""}
          width={48}
          height={48}
          className="h-12 w-12 shrink-0 rounded-full object-cover"
        />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-ink">{item.name}</p>
          <p className="mt-0.5 text-sm text-muted">{item.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
