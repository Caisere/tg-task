import Image from "next/image";
import { ActionLink } from "./shared";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-75.75 items-center justify-center overflow-hidden px-6 text-center text-white md:min-h-100 md:px-10 lg:min-h-122.5"
    >
      <Image
        src="/3f9fee51039d846e8786883c446663724e497325.jpg"
        alt="Professional working with digital business data"
        fill
        priority
        className="-z-20 object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-black/65" />
      <div className="max-w-5xl pt-2">
        <p className="mx-auto mb-5 w-fit rounded-full bg-white/15 px-8 py-3 text-xs md:px-12">
          WHAT WE DO
        </p>
        <h1 className="font-nunito-sans text-[25px] font-bold leading-tight md:text-[40px] lg:text-[52px]">
          Training and Development
        </h1>
        <p className="mx-auto mt-3 max-w-4xl text-sm leading-5 md:mt-5 md:text-[16px] md:leading-7 lg:text-[17px]">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>
        <div className="mt-6">
          <ActionLink>Book a Consultation</ActionLink>
        </div>
      </div>
    </section>
  );
}
