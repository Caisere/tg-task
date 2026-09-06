import { ActionLink } from "./shared";

export function CallToAction() {
  return (
    <section id="contact" className="bg-white px-6 py-6 md:px-10 md:py-8 lg:px-16">
      <div className="mx-auto max-w-[1085px] rounded bg-primary px-7 py-8 text-center text-white md:py-8">
        <p className="mx-auto max-w-[800px] text-[16px] leading-6 md:text-[18px] lg:text-[20px]">
          {" "}
          <span className="hidden md:inline">
            Want to accelerate professional growth and development at your
            organisation?
            <br />
          </span>
          <span className="md:hidden">
            Don&apos;t just dream it—let&apos;s build it!
            <br />
            Click now and start your project with Tobams Group. Your journey to
            digital excellence begins here.
          </span>
          <span className="hidden md:inline">See how we can help.</span>
        </p>
        <div className="mt-7">
          <ActionLink light>Book a Consultation</ActionLink>
        </div>
      </div>
    </section>
  );
}
