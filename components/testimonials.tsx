"use client";
import Image from "next/image";
import { useState } from "react";


const testimonials = [
  {
    name: "Aisha Yusuf",
    title: "Founder, CraftHub NG",
    image: "/aisha.png",
    quote:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    title: "Marketing Manager, E-Commerce Emporium",
    image: "/davies.png",
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    title: "HR Director, FutureTech Solutions",
    image: "/chinonso.png",
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    name: "Sarah Johnson",
    title: "CEO of Tech Innovations Inc.",
    image: "/aisha.png",
    quote:
      "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves. I can't recommend them enough!",
  },
];


export function Testimonials() {
  const [index, setIndex] = useState(0);
  const visible = [0, 1, 2].map(
    (offset) => testimonials[(index + offset) % testimonials.length],
  );
  
  return (
    <section className="bg-[#fafafa] px-7 py-12 md:px-10 md:py-14 lg:px-16">
      <h2 className="text-center text-[22px] font-bold md:text-[30px] lg:text-[38px]">
        Testimonials
      </h2>
      <div className="mx-auto mt-8 grid max-w-[1245px] gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, itemIndex) => (
          <article
            key={item.name}
            className={`rounded-l-xl border-l-2 border-primaryRed bg-white p-5 ${itemIndex === 2 ? "hidden lg:block" : itemIndex > 0 ? "hidden md:block" : ""}`}
          >
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={44}
                height={44}
                className="size-10 rounded-full"
              />
              <div>
                <h3 className="text-sm font-semibold">{item.name}</h3>
                <p className="text-xs text-black/50">{item.title}</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-6 md:text-[17px]">
              {item.quote}
            </p>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-7 flex max-w-[1245px] justify-end gap-3">
        <button
          aria-label="Previous testimonial"
          onClick={() =>
            setIndex((index + testimonials.length - 1) % testimonials.length)
          }
          className="grid size-8 place-items-center rounded bg-primaryRed/10 text-xl text-primaryRed"
        >
          ‹
        </button>
        <button
          aria-label="Next testimonial"
          onClick={() => setIndex((index + 1) % testimonials.length)}
          className="grid size-8 place-items-center rounded bg-primaryRed/10 text-xl text-primaryRed"
        >
          ›
        </button>
      </div>
    </section>
  );
}
