"use client";

export const categories = [
  { name: "Semua" },
  { name: "Ice Coffee" },
  { name: "Hot Coffee" },
  { name: "Signature" },
  { name: "Non Coffee" },
];

export default function Categories({
  activeCategory,
  onCategoryChangeAction,
}: {
  activeCategory: string;
  onCategoryChangeAction: (category: string) => void;
}) {
  return (
    <ul className="flex h-10 gap-4">
      {categories.map((category) => (
        <li
          key={category.name}
          onClick={() => onCategoryChangeAction(category.name)}
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
