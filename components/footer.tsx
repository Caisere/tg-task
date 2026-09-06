import Image from "next/image";
const columns = [
  {
    heading: "What We Do",
    links: [
      "Sustainability Services",
      "Strategy Planning and Implementation",
      "Tech Talent Solutions",
      "Training and Development",
      "IT Consulting Services",
      "Social Impact",
    ],
  },
  {
    heading: "Company",
    links: [
      "About",
      "Jobs",
      "Projects",
      "Our Founder",
      "Business Model",
      "The Team",
      "Contact Us",
      "Blog",
      "FAQs",
      "Testimonials",
    ],
  },
  {
    heading: "Solution",
    links: [
      "Tobams Group Academy",
      "Help a Tech Talent",
      "Campus Ambassadors Program",
      "Join Our Platform",
      "Pricing",
      "Book a Consultation",
      "Join Our Slack Community",
    ],
  },
];
function Social({ label, icon }: { label: string; icon: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid size-10 place-items-center rounded-full bg-white"
    >
      <Image src={icon} alt="" width={22} height={20} />
    </a>
  );
}
export function Footer() {
  return (
    <footer className="bg-secondaryPurple text-white">
      <section className="border-y border-white/30 px-7 py-6 md:px-10 md:py-8 lg:px-16 lg:py-10">
        <div className="mx-auto flex max-w-313.75 items-center justify-between gap-6">
          <div>
            <p className="text-sm md:text-[16px]">
              Ready to be a part of something extraordinary?
            </p>
            <h2 className="mt-4 text-[20px] md:text-[26px] lg:text-[30px]">
              Let&apos;s work together to create a difference
            </h2>
          </div>
          <a href="#contact" className="rounded bg-primary px-6 py-3 text-sm">
            Get In Touch
          </a>
        </div>
      </section>
      <div className="mx-auto max-w-313.75 px-7 py-12 md:px-10 lg:px-0">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1.7fr_1fr_1.25fr]">
          <div>
            <Image
              src="/Seecondary Logo copy 2.png"
              width={166}
              height={64}
              alt="Tobams Group"
              className="h-16 w-auto"
            />
            <p className="mt-8 max-w-[315px] text-sm leading-6">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>
            <div className="mt-6 flex gap-4">
              <Social label="LinkedIn" icon="/icons/linkedIn.svg" />
              <Social label="Instagram" icon="/icons/instagram.svg" />
              <Social label="X" icon="/icons/x.svg" />
            </div>
          </div>
          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-lg font-bold">{column.heading}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-primaryRed">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 rounded-lg bg-white/[.06] p-6 text-sm lg:grid lg:grid-cols-[1fr_1fr_.62fr] lg:p-6">
          <div className="lg:col-start-3 lg:row-start-1 lg:border-l lg:border-white/10 lg:pl-6">
            <h3 className="text-lg font-bold">Contact Information</h3>
            <p className="mt-4 flex items-center gap-4">
              <Image src="/icons/mail.svg" alt="" width={20} height={20} />
              theteam@tobamsgroup.com
            </p>
            <p className="mt-4 flex items-center gap-4">
              <Image src="/icons/cell.svg" alt="" width={20} height={20} />
              +447886600748
            </p>
          </div>
          <div className="mt-7 lg:col-span-2 lg:mt-0">
            <h3 className="text-lg font-bold">Registered Offices</h3>
            <div className="mt-4 lg:grid lg:grid-cols-2">
              <div>
                <p className="text-primaryRed">United Kingdom</p>
                <p className="leading-6">
                  074511196 (Registered by Company House)
                  <br />
                  Vine Cottages, 215 North Street, Romford, Essex, United
                  Kingdom, RM1 4QA
                </p>
              </div>
              <div className="mt-6 lg:mt-0 lg:border-l lg:border-white/10 lg:pl-6">
                <p className="text-primaryRed">Nigeria</p>
                <p className="leading-6">
                  RC 1048722 (Registered by the Corporate Affairs Commission)
                  <br />
                  4, Muaz Close, Angwari-Rimi
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col-reverse items-center gap-5 border-t border-white/10 pt-7 text-center text-sm lg:flex-row lg:justify-between">
          <p>Copyright © Tobams Group, 2024. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-8 underline">
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
