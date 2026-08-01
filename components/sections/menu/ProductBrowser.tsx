"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { PlusIcon, SearchIcon } from "lucide-react";
import Categories from "@/components/ui/Categories";
import FilterDropdown, { type SortOption } from "@/components/ui/FilterDropdown";
import { menuItems } from "@/data/menu";

export default function ProductBrowser() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [sortOption, setSortOption] = useState<SortOption>("newest");

  const filteredItems = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    const result = menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "Semua" || item.category === activeCategory;
      const matchesSearch =
        keyword === "" || item.name.toLowerCase().includes(keyword);
      return matchesCategory && matchesSearch;
    });

    switch (sortOption) {
      case "oldest":
        return result.sort((a, b) => a.id - b.id);
      case "asc-price":
        return result.sort((a, b) => a.price - b.price);
      case "desc-price":
        return result.sort((a, b) => b.price - a.price);
      case "newest":
      default:
        return result.sort((a, b) => b.id - a.id);
    }
  }, [search, activeCategory, sortOption]);

  return (
    <>
      <div className="mt-8">
        <label className="relative">
          <SearchIcon
            size={20}
            className="absolute top-1/2 left-3.5 -translate-y-1/2 text-[#666666]"
          />
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Cari menu favoritmu..."
            className="w-full rounded-xl p-3.5 pl-10.5 outline outline-[#DAD7CD] placeholder:text-[#A3A3A3]"
          />
        </label>
        <div className="mt-8 flex items-center justify-between text-[#3A5A40]">
          <Categories
            activeCategory={activeCategory}
            onCategoryChangeAction={setActiveCategory}
          />
          <FilterDropdown value={sortOption} onChange={setSortOption} />
        </div>
      </div>
      {filteredItems.length === 0 ? (
        <p className="mt-12 text-center font-semibold text-[#666666]">
          Menu tidak ditemukan.
        </p>
      ) : (
        <div className="mt-9 grid grid-cols-5 gap-7 text-sm font-semibold">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="min-w-59 rounded-4xl p-5.5 outline outline-[#DAD7CD]"
            >
              <div
                id="placeholder"
                className="relative h-30.5 overflow-hidden rounded-[14px] bg-[#F0F0F0]"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="mt-5 font-bold">{item.name}</h4>
              <p className="mt-2 text-[#666666]">{item.component}</p>
              <div className="mt-6.5 flex items-center justify-between gap-3">
                <p className="flex gap-1.5">
                  Rp <span>{item.price.toLocaleString("id-ID")}</span>
                </p>
                <button className="flex h-7.5 w-7.5 cursor-pointer items-center justify-center rounded-full bg-[#3A5A40] text-white">
                  <PlusIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
