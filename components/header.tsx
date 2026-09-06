"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ShareLink } from "./shared";

const links = [
  "About",
  "What We Do",
  "Jobs",
  "Projects",
  "TG Academy",
  "Strategic Partnership",
  "Pricing",
  "Book a Consultation",
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white font-nunito-sans">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-7 md:h-[88px] md:px-10 lg:h-[109px] lg:px-16">
        <a href="#top" aria-label="Tobams Group home">
          <Image
            src="/Seecondary Logo copy 2.png"
            alt="Tobams Group"
            width={166}
            height={64}
            className="h-10 w-auto md:h-12 lg:h-16"
            priority
          />
        </a>
        <div className="hidden items-center gap-5 lg:flex">
          <ShareLink
            href="#contact"
            hasFirstIcon={true}
            firstIconSrc="/icons/profile-image.svg"
            label="Account"
            hasSecondIcon={true}
            secondIconSrc="/icons/arrow-down.svg"
            bgColor=""
          />
          <ShareLink
            href="#assessment"
            label="Take Assessment"
            bgColor="bg-primaryRed"
          />
        </div>
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className="grid size-7 place-items-center rounded bg-primaryTextColor text-lg font-bold text-white lg:hidden"
        >
          <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={cn(
          "border-t border-border bg-white px-7 pb-6 pt-4 shadow-lg transition-all duration-200 lg:hidden",
          isMenuOpen ? "block" : "hidden",
        )}
      >
        <ul className="space-y-1">
          {links.map((link, index) => (
            <li key={link}>
              <a
                href={link === "Book a Consultation" ? "#contact" : "#"}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between rounded px-3 py-3 text-base text-primary transition hover:bg-lightCoralRed focus-visible:outline-2 focus-visible:outline-primaryRed"
              >
                {link}
                {index < 3 && <span aria-hidden="true">⌄</span>}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-5 grid gap-3 border-t border-border pt-5 sm:grid-cols-2">
          <a
            href="#account"
            onClick={() => setIsMenuOpen(false)}
            className="rounded bg-primary px-4 py-3 text-center font-semibold text-white"
          >
            Account
          </a>
          <a
            href="#assessment"
            onClick={() => setIsMenuOpen(false)}
            className="rounded bg-primaryRed px-4 py-3 text-center font-semibold text-white"
          >
            Take Assessment
          </a>
        </div>
      </nav>
      <nav
        aria-label="Primary navigation"
        className="hidden border-t border-border lg:block"
      >
        <ul className="mx-auto flex h-16 max-w-[1030px] items-center justify-between text-[17px]">
          {links.map((link, index) => (
            <li key={link}>
              <a
                href={link === "Book a Consultation" ? "#contact" : "#"}
                className={cn(
                  "flex items-center hover:border-b hover:border-primary hover:pb-1 text-primary hover:text-primary transition-all duration-300 ease-in-out",
                )}
              >
                <span>{link}</span>
                {index < 3 && (
                  <span>
                    <Image
                      src={"/icons/arrow-down.svg"}
                      width={32}
                      height={32}
                      alt=""
                    />
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
