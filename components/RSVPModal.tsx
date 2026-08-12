"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { CloseIcon } from "@/components/icons";

type RSVPModalProps = {
  date: string;
  copy: {
    cta: string;
    dialogAria: string;
    title: string;
    closeAria: string;
    successTitle: string;
    successBody: string;
    close: string;
    guestName: string;
    guestNamePlaceholder: string;
    guestCount: string;
    needsRoom: string;
    yes: string;
    no: string;
    optionalMessage: string;
    messagePlaceholder: string;
    submit: string;
  };
};

export function RSVPModal({ date, copy }: RSVPModalProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.classList.toggle("modal-open", open);

    if (open) {
      const focusTimer = window.setTimeout(() => nameInputRef.current?.focus(), 100);
      return () => {
        window.clearTimeout(focusTimer);
        document.body.classList.remove("modal-open");
      };
    }

    return () => document.body.classList.remove("modal-open");
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Frontend-only placeholder. Connect this handler to an RSVP API later.
    setSubmitted(true);
  }

  function closeModal() {
    setOpen(false);
    window.setTimeout(() => setSubmitted(false), 300);
  }

  return (
    <>
      <button
        className="focus-ring inline-flex min-h-14 items-center justify-center bg-[var(--sage-dark)] px-10 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-[var(--charcoal)]"
        onClick={() => setOpen(true)}
        type="button"
      >
        {copy.cta}
      </button>

      {open ? (
        <div
          aria-label={copy.dialogAria}
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-end justify-center bg-[rgba(31,30,27,0.62)] p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
          role="dialog"
          style={{ animation: "fade-in 250ms ease both" }}
        >
          <div
            className="max-h-[95svh] w-full overflow-y-auto bg-[var(--paper)] px-6 py-7 sm:max-w-2xl sm:px-10 sm:py-10"
            style={{ animation: "modal-in 400ms cubic-bezier(0.22, 1, 0.36, 1) both" }}
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="eyebrow mb-3">{date}</p>
                <h2 className="font-serif text-5xl leading-none tracking-[-0.045em] sm:text-6xl">{copy.title}</h2>
              </div>
              <button aria-label={copy.closeAria} className="focus-ring flex h-10 w-10 items-center justify-center" onClick={closeModal} type="button">
                <CloseIcon />
              </button>
            </div>

            {submitted ? (
              <div className="flex min-h-[23rem] flex-col items-center justify-center text-center">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--sage)] text-2xl text-white">✓</div>
                <h3 className="font-serif text-balance text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
                  {copy.successTitle}
                </h3>
                <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted)]">{copy.successBody}</p>
                <button className="focus-ring mt-8 border-b border-current pb-1 text-xs font-semibold uppercase tracking-[0.2em]" onClick={closeModal} type="button">
                  {copy.close}
                </button>
              </div>
            ) : (
              <form className="mt-10 space-y-7" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="mb-2 block text-[0.67rem] font-semibold uppercase tracking-[0.18em]">{copy.guestName}</span>
                  <input
                    className="focus-ring w-full border-0 border-b border-[var(--line)] bg-transparent px-0 py-3 text-base outline-none transition-colors focus:border-[var(--sage-dark)]"
                    name="guestName"
                    placeholder={copy.guestNamePlaceholder}
                    ref={nameInputRef}
                    required
                    type="text"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[0.67rem] font-semibold uppercase tracking-[0.18em]">{copy.guestCount}</span>
                  <input
                    className="focus-ring w-full border-0 border-b border-[var(--line)] bg-transparent px-0 py-3 outline-none transition-colors focus:border-[var(--sage-dark)]"
                    defaultValue={1}
                    max={10}
                    min={1}
                    name="guestCount"
                    required
                    type="number"
                  />
                </label>

                <fieldset>
                  <legend className="mb-3 text-[0.67rem] font-semibold uppercase tracking-[0.18em]">{copy.needsRoom}</legend>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: copy.yes, value: "yes" },
                      { label: copy.no, value: "no" },
                    ].map((option) => (
                      <label className="cursor-pointer" key={option.value}>
                        <input className="peer sr-only" name="needsRoom" required type="radio" value={option.value} />
                        <span className="flex min-h-12 items-center justify-center border border-[var(--line)] text-sm transition-colors peer-checked:border-[var(--sage-dark)] peer-checked:bg-[var(--sage-dark)] peer-checked:text-white">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="block">
                  <span className="mb-2 block text-[0.67rem] font-semibold uppercase tracking-[0.18em]">{copy.optionalMessage}</span>
                  <textarea
                    className="focus-ring min-h-28 w-full resize-y border border-[var(--line)] bg-transparent p-4 outline-none transition-colors focus:border-[var(--sage-dark)]"
                    name="message"
                    placeholder={copy.messagePlaceholder}
                  />
                </label>

                <button className="focus-ring min-h-14 w-full bg-[var(--sage-dark)] px-8 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[var(--charcoal)]" type="submit">
                  {copy.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
