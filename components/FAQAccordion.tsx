"use client";

import { useState } from "react";
import { ChevronDown } from "@/components/icons";

type FAQAccordionProps = {
  faqs: ReadonlyArray<{ question: string; answer: string }>;
};

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-[var(--line)]">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <div className="border-b border-[var(--line)]" key={faq.question}>
            <button
              aria-controls={answerId}
              aria-expanded={isOpen}
              className="focus-ring flex w-full items-center justify-between gap-6 py-6 text-left sm:py-8"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
            >
              <span className="font-serif pr-4 text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">{faq.question}</span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line)]">
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              id={answerId}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-7 pr-12 text-sm leading-7 text-[var(--muted)] sm:pb-9 sm:text-base">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
