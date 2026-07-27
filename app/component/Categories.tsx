"use client";

import { useState } from "react";

export default function Categories() {
  const categories = [
    { name: "Semua" },
    { name: "Ice Coffe" },
    { name: "Hot Coffe" },
    { name: "Signature" },
    { name: "Non Coffe" },
  ];

  const [activeCategory, setActiveCategory] = useState("Semua");

  return (
    <ul className="flex h-10 gap-4">
      {categories.map((category) => (
        <li
          key={category.name}
          onClick={() => setActiveCategory(category.name)}
          className={`${
            activeCategory === category.name
              ? "relative z-1 flex h-full items-center justify-center rounded-xl bg-[#3A5A40] px-5 text-sm font-semibold text-white"
              : "relative z-1 flex h-full items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold outline outline-[#DAD7CD]"
          } cursor-pointer`}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
}
