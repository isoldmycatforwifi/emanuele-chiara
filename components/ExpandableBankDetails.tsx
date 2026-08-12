"use client";

import { useState } from "react";
import { ChevronDown, CopyIcon } from "@/components/icons";

const DUMMY_IBAN = "IT00 X000 0000 0000 0000 0000 000";

type ExpandableBankDetailsProps = {
  copy: {
    viewDetails: string;
    dummyWarning: string;
    accountHolder: string;
    bank: string;
    bankValue: string;
    bicSwift: string;
    reference: string;
    referenceValue: string;
    iban: string;
    copyAria: string;
    copy: string;
    copied: string;
  };
};

export function ExpandableBankDetails({ copy }: ExpandableBankDetailsProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyIban() {
    try {
      await navigator.clipboard.writeText(DUMMY_IBAN);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="border-y border-[var(--line)]">
      <button
        aria-controls="bank-details"
        aria-expanded={open}
        className="focus-ring flex w-full items-center justify-between gap-5 py-6 text-left sm:py-8"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span className="font-serif text-2xl tracking-[-0.025em] sm:text-3xl">{copy.viewDetails}</span>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line)]">
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </span>
      </button>

      <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`} id="bank-details">
        <div className="overflow-hidden">
          <div className="border-t border-[var(--line)] pb-8 pt-7 sm:pb-10 sm:pt-9">
            <p className="mb-7 text-xs italic text-[var(--muted)]">{copy.dummyWarning}</p>
            <dl className="space-y-6">
              {[
                { label: copy.accountHolder, value: "Emanuele Rossi & Chiara Bianchi" },
                { label: copy.bank, value: copy.bankValue },
                { label: copy.bicSwift, value: "EXAMPLE00" },
                { label: copy.reference, value: copy.referenceValue },
              ].map((detail) => (
                <div className="grid gap-1 sm:grid-cols-[10rem_1fr]" key={detail.label}>
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-[var(--muted)]">{detail.label}</dt>
                  <dd className="text-sm">{detail.value}</dd>
                </div>
              ))}
              <div className="grid gap-2 sm:grid-cols-[10rem_1fr]">
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-[var(--muted)]">{copy.iban}</dt>
                <dd className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="break-all font-mono text-[0.8rem] tracking-wide">{DUMMY_IBAN}</span>
                  <button
                    aria-label={copy.copyAria}
                    className="focus-ring inline-flex min-h-9 items-center gap-2 border border-[var(--line)] px-3 text-[0.62rem] font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-[var(--cream)]"
                    onClick={copyIban}
                    type="button"
                  >
                    <CopyIcon /> {copied ? copy.copied : copy.copy}
                  </button>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
