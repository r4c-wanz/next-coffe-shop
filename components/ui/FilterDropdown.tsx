"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon, SlidersHorizontalIcon } from "lucide-react";

export type SortOption = "newest" | "oldest" | "asc-price" | "desc-price";

const options: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "asc-price", label: "Ascending Price" },
  { value: "desc-price", label: "Descending Price" },
];

export default function FilterDropdown({
  value,
  onChange,
}: {
  value: SortOption;
  onChange: (value: SortOption) => void;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-white px-5 text-sm font-semibold outline outline-[#DAD7CD]"
      >
        <SlidersHorizontalIcon size={20} />
        Filter
      </button>
      {open && (
        <ul className="absolute top-12 right-0 z-10 w-52 overflow-hidden rounded-xl bg-white py-2 text-sm font-semibold shadow-lg outline outline-[#DAD7CD]">
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                className={`flex w-full cursor-pointer items-center justify-between px-4 py-2.5 text-left hover:bg-[#F0F0F0] ${
                  value === option.value ? "text-[#3A5A40]" : "text-[#666666]"
                }`}
              >
                {option.label}
                {value === option.value && <CheckIcon size={16} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
