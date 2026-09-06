import Image from "next/image";
import { Bolt } from "./shared";

const benefits = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export function ManagementSection() {
  return (
    <section className="bg-[#f8f8f8] px-6 py-6 md:px-10 md:py-12 lg:px-16 lg:py-16">
      <article className="mx-auto max-w-328 rounded-[20px] bg-secondaryPurple p-5 text-white md:grid md:grid-cols-2 md:items-center md:gap-7 md:p-7 lg:gap-11 lg:p-10">
        <Image
          src="/733872776ac31abdb528d87705fbbb7945a0d26d.jpg"
          alt="Colleagues sharing a tablet in an office"
          width={1000}
          height={667}
          className="mt-5 aspect-[1.27] w-full rounded-lg object-cover md:mt-0 md:h-[430px] lg:h-[610px]"
        />
        <div className="mt-5 md:mt-0 md:self-center">
          <h2 className="text-lg font-semibold md:text-[29px] md:font-normal lg:text-[38px]">
            Management Development Program
          </h2>
          <div className="mt-5 text-sm leading-5 md:mt-5 md:text-[15px] md:leading-[1.5] lg:mt-7 lg:text-[17px] lg:leading-[1.55]">
            <p>
              Tobams Group offers a comprehensive Management Development Program
              designed to equip corporate organisations with the high
              -performing leaders they need to thrive.
            </p>
            <p className="mt-6">
              Our program includes workshops, seminars, coaching sessions,
              online courses, and experiential learning opportunities designed
              to improve leadership, strategic thinking, communication, and
              other essential managerial competencies for corporate
              organisations.
            </p>
            <div className="mt-8 space-y-5">
              {benefits.map((benefit) => (
                <div
                  className="flex items-center gap-4 rounded-md bg-[#9c6a8d] px-4 py-3"
                  key={benefit}
                >
                  <Bolt white />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
