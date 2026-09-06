import { ActionLink } from "./shared";

const details = [
  [
    "Expert-Led Learning",
    "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  ],
  [
    "Comprehensive Curriculum",
    "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  ],
  [
    "Interactive Workshops",
    "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  ],
  [
    "Global Recognition",
    "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  ],
];

export function ConsultantSection() {
  return (
    <section className="bg-[#eee6ed] px-6 py-12 md:px-10 md:py-14 lg:px-16">
      <div className="mx-auto max-w-[1255px]">
        <h2 className="text-[23px] text-primary md:text-[30px] lg:text-[38px]">
          Training The Consultant
        </h2>
        <p className="mt-3 text-sm font-semibold text-primary md:text-[17px]">
          Maximise Your Potential as a Certified Trainer:
        </p>
        <p className="mt-6 text-sm leading-5 md:text-[16px] md:leading-[1.55] lg:text-[17px]">
          With the help of our Business Analysis Training Consultants program,
          take a revolutionary step toward becoming a distinguished certified
          trainer. Learn from professionals in the field, immerse yourself in a
          thorough curriculum, and hone your training methods through
          interactive workshops. Participating in our program will enable you to
          gain expertise in Business Analysis while also developing the
          abilities to mentor and encourage others in their career advancement.
        </p>
        <div className="mt-5 grid gap-6 rounded-lg bg-primary p-6 text-sm leading-5 text-white md:grid-cols-2 md:gap-x-10 md:gap-y-6 md:p-6 md:text-[16px] lg:gap-x-20 lg:text-[17px]">
          {details.map(([heading, text]) => (
            <div key={heading}>
              <h3 className="font-bold">{heading}</h3>
              <p className="mt-3">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <ActionLink>
            Learn more <span className="text-2xl">›</span>
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
