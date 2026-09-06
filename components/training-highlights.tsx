import Image from "next/image";
import { BulletList } from "./shared";

const trainings = [
  {
    title: "Corporate Trainings",
    image: "/e5e1262308c38e62b50da6013b0ae330a3dfab22.jpg",
    text: "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
    items: [
      "Leadership Training",
      "Strategic Planning and Implementation",
      "Project Management",
      "Sustainability Training",
      "Customised Training",
    ],
  },
  {
    title: "Personalised Individual Training",
    image: "/9d2e7f745af0f275c5f457a871cad852f9dabd10.jpg",
    text: "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
    items: [
      "Leadership Development",
      "Soft Skills Development",
      "Industry Specific Knowledge",
      "Technical Skills Enhancement",
      "Time Management and Productivity",
      "Career Development",
    ],
  },
  {
    title: "Capacity Development",
    image: "/5c5a12abda242a3deb8ee7eb2002146f0ec1ea57.jpg",
    text: "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
    items: [
      "Tailored Training Programs",
      "Expert-Led Workshops",
      "Personalized Mentorship",
      "Technical Skills Enhancement",
      "Collaborative Learning Environment",
      "Ongoing Support and Resources",
    ],
  },
];

export function TrainingHighlights() {
  return (
    <section className="bg-white px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1255px] space-y-10 md:space-y-16 lg:space-y-28">
        {trainings.map((training, index) => (
          <article
            key={training.title}
            className="grid gap-5 md:grid-cols-2 md:items-center md:gap-10 lg:gap-20"
          >
            <div className={index % 2 ? "md:order-2" : ""}>
              <h2 className="text-xl font-semibold md:text-[29px] lg:text-[38px]">
                {training.title}
              </h2>
              <div className="mt-4 md:hidden">
                <Image
                  src={training.image}
                  alt={training.title}
                  width={1000}
                  height={667}
                  className="aspect-[1.45] w-full rounded-[25px] object-cover"
                />
              </div>
              <p className="mt-5 text-sm leading-5 text-black/55 md:text-[15px] md:leading-[1.55] lg:text-[17px]">
                {training.text}
              </p>
              <div className="mt-6 px-7.5">
                <BulletList items={training.items} />
              </div>
            </div>
            <Image
              src={training.image}
              alt={training.title}
              width={1000}
              height={667}
              className={`hidden h-[300px] w-full rounded-[25px] object-cover md:block lg:h-91.25 ${index % 2 ? "md:order-1" : ""}`}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
