import Image from "next/image";
import { ActionLink, Bolt } from "./shared";

const topics = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export function CeoHubSection() {
  return (
    <section className="bg-white px-6 py-12 md:px-10 md:py-14 lg:px-16 lg:py-20">
      <article className="mx-auto max-w-[1255px] rounded-[16px] bg-[#fbdadd] p-4 md:p-7 lg:p-10">
        <p className="text-sm italic text-primaryTextBlue md:text-lg">
          Learning With Our CEO:
        </p>
        <h2 className="mt-2 text-[20px] italic text-primary md:text-[26px] lg:text-[30px]">
          Transformation Hub With Jite Newton
        </h2>
        <p className="mt-5 text-sm leading-5 md:mt-7 md:text-[17px] md:leading-[1.55]">
          Transformation Hub with Jite Newton is a flagship webinar series
          curated by the CEO, Dr. Jite Newton. Designed to elevate career
          trajectories and leadership capabilities, this exclusive event offers
          invaluable insights and strategies for personal and professional
          growth. Whether you&apos;re seeking to advance your career or enhance
          your leadership skills, the Transformation Hub provides a
          transformative learning experience to unlock your full potential and
          drive success in your endeavours.
        </p>
        <div className="mt-5 grid gap-7 lg:grid-cols-2 lg:gap-7">
          <Image
            src="/f83c7998e33b33da8cc0b1cf834df42b459ef661 (1).jpg"
            alt="Woman looking at a digital display"
            width={1500}
            height={1000}
            className="aspect-[1.65] w-full rounded-lg object-cover"
          />
          <div className="rounded-lg bg-[#fce8ea] p-5 md:grid md:grid-cols-2 md:gap-3">
            <div className="contents">
              {topics.map((topic) => (
                <div
                  key={topic}
                  className="mb-3 flex items-center gap-4 rounded-xl bg-white px-5 py-4 text-sm md:mb-0 md:text-[16px]"
                >
                  <Bolt />
                  {topic}
                </div>
              ))}
            </div>
            <div className="mt-3 md:col-span-2">
              <ActionLink>
                Learn More <span className="text-lg">↗</span>
              </ActionLink>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
