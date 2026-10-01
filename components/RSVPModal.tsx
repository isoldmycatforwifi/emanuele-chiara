"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
    hasChildren: string;
    needsRoom: string;
    yes: string;
    no: string;
    optionalMessage: string;
    messagePlaceholder: string;
    submit: string;
    errorTitle: string;
    guestNameError: string;
    hasChildrenError: string;
    needsRoomError: string;
  };
};

type FormErrors = {
  guestNames?: string;
  hasChildren?: string;
  needsRoom?: string;
};

export function RSVPModal({ date, copy }: RSVPModalProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [guestCount, setGuestCount] = useState(1);
  const [errors, setErrors] = useState<FormErrors>({});
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const body = document.body;
    const scrollPosition = window.scrollY;
    const previousStyles = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
    };

    body.classList.add("modal-open");
    body.style.position = "fixed";
    body.style.top = `-${scrollPosition}px`;
    body.style.width = "100%";

    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 80);

    return () => {
      window.clearTimeout(focusTimer);
      body.classList.remove("modal-open");
      body.style.position = previousStyles.position;
      body.style.top = previousStyles.top;
      body.style.width = previousStyles.width;
      window.scrollTo(0, scrollPosition);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function focusFirstError(nextErrors: FormErrors, missingGuestIndex: number) {
    window.requestAnimationFrame(() => {
      const selector = nextErrors.guestNames
        ? `[name="guestName${missingGuestIndex + 1}"]`
        : nextErrors.hasChildren
          ? '[name="hasChildren"]'
          : '[name="needsRoom"]';
      const field = formRef.current?.querySelector<HTMLElement>(selector);
      field?.focus({ preventScroll: true });
      field?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const missingGuestIndex = Array.from({ length: guestCount }, (_, index) => index).find(
      (index) => !String(formData.get(`guestName${index + 1}`) ?? "").trim(),
    );
    const nextErrors: FormErrors = {};

    if (missingGuestIndex !== undefined) nextErrors.guestNames = copy.guestNameError;
    if (!formData.get("hasChildren")) nextErrors.hasChildren = copy.hasChildrenError;
    if (!formData.get("needsRoom")) nextErrors.needsRoom = copy.needsRoomError;

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      focusFirstError(nextErrors, missingGuestIndex ?? 0);
      return;
    }

    setErrors({});
    // Frontend-only placeholder. Connect this handler to the Google Sheets endpoint later.
    setSubmitted(true);
  }

  function closeModal() {
    setOpen(false);
    window.setTimeout(() => {
      setSubmitted(false);
      setErrors({});
      triggerRef.current?.focus();
    }, 200);
  }

  const errorMessages = Object.values(errors);

  return (
    <>
      <button
        className="focus-ring inline-flex min-h-14 items-center justify-center bg-[var(--sage-dark)] px-10 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-[var(--charcoal)]"
        onClick={() => setOpen(true)}
        ref={triggerRef}
        type="button"
      >
        {copy.cta}
      </button>

      {open && typeof document !== "undefined"
        ? createPortal(
            <div
              aria-label={copy.dialogAria}
              aria-modal="true"
              className="fixed inset-0 z-[100] flex items-end justify-center overflow-hidden bg-[rgba(31,30,27,0.62)] backdrop-blur-sm sm:items-center sm:p-6"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) closeModal();
              }}
              role="dialog"
              style={{ animation: "fade-in 200ms ease both" }}
            >
              <div
                className="flex h-[100dvh] w-full flex-col overflow-hidden bg-[var(--paper)] sm:h-auto sm:max-h-[calc(100dvh-3rem)] sm:max-w-2xl"
                style={{ animation: "modal-in 320ms cubic-bezier(0.22,1,0.36,1) both" }}
              >
                <header className="flex shrink-0 items-start justify-between gap-5 border-b border-[var(--line)] bg-[var(--paper)] px-5 py-5 sm:px-10 sm:py-7">
                  <div className="min-w-0">
                    <p className="eyebrow mb-2">{date}</p>
                    <h2 className="font-serif text-4xl leading-none tracking-[-0.04em] sm:text-5xl">{copy.title}</h2>
                  </div>
                  <button
                    aria-label={copy.closeAria}
                    className="focus-ring -mr-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-black/5"
                    onClick={closeModal}
                    ref={closeButtonRef}
                    type="button"
                  >
                    <CloseIcon />
                  </button>
                </header>

                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-7 [-webkit-overflow-scrolling:touch] sm:px-10 sm:py-9">
                  {submitted ? (
                    <div className="flex min-h-[60dvh] flex-col items-center justify-center py-10 text-center sm:min-h-[24rem]">
                      <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--sage)] text-2xl text-white">✓</div>
                      <h3 className="font-serif text-balance text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">{copy.successTitle}</h3>
                      <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted)]">{copy.successBody}</p>
                      <button className="focus-ring mt-8 border-b border-current pb-1 text-xs font-semibold uppercase tracking-[0.2em]" onClick={closeModal} type="button">
                        {copy.close}
                      </button>
                    </div>
                  ) : (
                    <form
                      className="space-y-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
                      noValidate
                      onChange={() => {
                        if (errorMessages.length) setErrors({});
                      }}
                      onSubmit={handleSubmit}
                      ref={formRef}
                    >
                      {errorMessages.length ? (
                        <div aria-live="polite" className="border-l-2 border-[var(--sage-dark)] bg-[rgba(83,96,78,0.08)] px-4 py-3" role="alert">
                          <p className="text-sm font-semibold text-[var(--charcoal)]">{copy.errorTitle}</p>
                          <ul className="mt-1 space-y-1 text-sm leading-6 text-[var(--muted)]">
                            {errorMessages.map((message) => <li key={message}>{message}</li>)}
                          </ul>
                        </div>
                      ) : null}

                      <label className="block">
                        <span className="mb-2 block text-[0.67rem] font-semibold uppercase tracking-[0.18em]">{copy.guestCount}</span>
                        <input
                          className="focus-ring w-full border-0 border-b border-[var(--line)] bg-transparent px-0 py-3 outline-none transition-colors focus:border-[var(--sage-dark)]"
                          inputMode="numeric"
                          max={10}
                          min={1}
                          name="guestCount"
                          onChange={(event) => {
                            const nextCount = Number(event.currentTarget.value);
                            if (Number.isFinite(nextCount)) setGuestCount(Math.min(10, Math.max(1, nextCount)));
                          }}
                          type="number"
                          value={guestCount}
                        />
                      </label>

                      <div className="space-y-5">
                        {Array.from({ length: guestCount }, (_, index) => (
                          <label className="block" key={index}>
                            <span className="mb-2 block text-[0.67rem] font-semibold uppercase tracking-[0.18em]">{copy.guestName} {index + 1}</span>
                            <input
                              aria-invalid={Boolean(errors.guestNames)}
                              autoComplete="name"
                              className={`focus-ring w-full border-0 border-b bg-transparent px-0 py-3 text-base outline-none transition-colors focus:border-[var(--sage-dark)] ${errors.guestNames ? "border-[#8b4f49]" : "border-[var(--line)]"}`}
                              name={`guestName${index + 1}`}
                              placeholder={copy.guestNamePlaceholder}
                              type="text"
                            />
                          </label>
                        ))}
                      </div>

                      <fieldset aria-invalid={Boolean(errors.hasChildren)}>
                        <legend className="mb-3 text-[0.67rem] font-semibold uppercase tracking-[0.18em]">{copy.hasChildren}</legend>
                        <div className="grid grid-cols-2 gap-3">
                          {[{ label: copy.yes, value: "yes" }, { label: copy.no, value: "no" }].map((option) => (
                            <label className="cursor-pointer" key={option.value}>
                              <input className="peer sr-only" name="hasChildren" type="radio" value={option.value} />
                              <span className={`flex min-h-12 items-center justify-center border text-sm transition-colors peer-checked:border-[var(--sage-dark)] peer-checked:bg-[var(--sage-dark)] peer-checked:text-white ${errors.hasChildren ? "border-[#8b4f49]" : "border-[var(--line)]"}`}>{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </fieldset>

                      <fieldset aria-invalid={Boolean(errors.needsRoom)}>
                        <legend className="mb-3 text-[0.67rem] font-semibold uppercase tracking-[0.18em]">{copy.needsRoom}</legend>
                        <div className="grid grid-cols-2 gap-3">
                          {[{ label: copy.yes, value: "yes" }, { label: copy.no, value: "no" }].map((option) => (
                            <label className="cursor-pointer" key={option.value}>
                              <input className="peer sr-only" name="needsRoom" type="radio" value={option.value} />
                              <span className={`flex min-h-12 items-center justify-center border text-sm transition-colors peer-checked:border-[var(--sage-dark)] peer-checked:bg-[var(--sage-dark)] peer-checked:text-white ${errors.needsRoom ? "border-[#8b4f49]" : "border-[var(--line)]"}`}>{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </fieldset>

                      <label className="block">
                        <span className="mb-2 block text-[0.67rem] font-semibold uppercase tracking-[0.18em]">{copy.optionalMessage}</span>
                        <textarea className="focus-ring min-h-24 w-full resize-y border border-[var(--line)] bg-transparent p-4 outline-none transition-colors focus:border-[var(--sage-dark)]" name="message" placeholder={copy.messagePlaceholder} />
                      </label>

                      <button className="focus-ring min-h-14 w-full bg-[var(--sage-dark)] px-8 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[var(--charcoal)]" type="submit">{copy.submit}</button>
                    </form>
                  )}
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
