import { StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "Chandra Budiman",
    rating: 5,
    comment:
      "Es Tiramisu Latte juara! Rasanya pas, manisnya natural dan kopinya terasa banget",
  },
  {
    name: "Rachel Setyawan",
    rating: 5,
    comment:
      "Es Americano di sini paling enak! Segar, strong dan bikin melek sepanjang hari",
  },
  {
    name: "Zakhi Ramadhan",
    rating: 4,
    comment:
      "Es Caramelnya di sini paling the best! Bisa ditingkatkan lagi pelayanannya",
  },
];

const colors = ["bg-[#3A5A40]", "bg-[#3A5A40]", "bg-[#3B2010]"];

function getInitials(name: string) {
  if (!name) return "";
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="flex h-[80dvh] items-center p-5">
      <div className="mx-auto max-w-323 flex-1">
        <h2 className="px-1 font-semibold text-[#666666]">
          Apa kata mereka?
        </h2>
        <h3 className="mt-3 px-1 font-mono text-[32px] font-semibold text-[#3A5A40]">
          Cerita dari pecinta kopi
        </h3>
        <div className="mt-9 grid grid-cols-3 gap-7 text-sm font-bold">
          {testimonials.map((testimonial, index) => {
            const selectedColor = colors[index % colors.length];
            return (
              <div
                key={index}
                className="flex w-full min-w-59 items-center gap-6.5 rounded-4xl p-5.5 outline outline-[#DAD7CD]"
              >
                <div
                  id="photo-profile"
                  className={`flex h-27.5 w-27.5 shrink-0 items-center justify-center rounded-full ${selectedColor} text-4xl text-white`}
                >
                  {getInitials(testimonial.name)}
                </div>
                <div className="w-full">
                  <h4 className="">
                    {testimonial.name === ""
                      ? "Sobat Cituisi"
                      : testimonial.name}
                  </h4>
                  <div className="mt-1.5 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, starIndex) => {
                      const starValue = starIndex + 1;

                      return (
                        <StarIcon
                          key={starIndex}
                          size={16}
                          className={
                            starValue <= testimonial.rating
                              ? "fill-[#E68B24] text-transparent"
                              : "fill-[#666666] text-transparent"
                          }
                        />
                      );
                    })}
                  </div>
                  <p className="mt-3 font-semibold text-[#666666]">
                    “
                    {testimonial.comment === ""
                      ? "Kata-kata hari ini."
                      : testimonial.comment}
                    ”
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
