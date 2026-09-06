import Image from "next/image";
import { ActionLink } from "./shared";

const courses = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

export function AcademySection() {
  return (
    <section className="bg-[#eee6ed] px-6 py-7 md:px-10 md:py-14 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-312.5 gap-7 md:max-w-[620px] lg:max-w-312.5 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-x-16 lg:gap-y-6">
        <h2 className="order-1 text-[20px] font-semibold tracking-wide text-primary md:text-[28px] lg:col-start-2 lg:row-start-1 lg:text-[40px]">
          Learning Management System
        </h2>
        <div className="order-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <Image
            src="/03f9d7af15f0ea1c24958b1735583ae7eab882f1.jpg"
            alt="Two professionals smiling in an office"
            width={1880}
            height={1253}
            className="mx-auto aspect-square w-[265px] rounded-full object-cover md:w-[340px] lg:w-[500px]"
          />
        </div>
        <div className="order-3 rounded-lg bg-[#dfd1dc] p-5 text-sm leading-[1.65] md:text-[16px] lg:col-start-2 lg:row-start-2 lg:w-[627.12px] lg:text-[17px]">
          <p>
            TG Academy is a hub of knowledge and skill-building resources
            designed to empower tech talents on their learning journey. From
            technical courses covering the latest programming languages and
            development frameworks to soft skills training in leadership,
            effective communication and project management, TG Academy offers a
            wide range of courses to cater to diverse learning needs. With
            accessible and interactive learning materials, individuals can
            enhance their skills and stay ahead in today&apos;s competitive tech
            landscape.
          </p>
          <p className="mt-5 font-bold text-primary">
            Some of our courses include:
          </p>
          <ul className="mt-3 flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:gap-5">
            {courses.map((course) => (
              <li key={course} className="flex gap-2 before:content-['•']">
                {course}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <ActionLink>
              Learn More <span className="text-lg">↗</span>
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
