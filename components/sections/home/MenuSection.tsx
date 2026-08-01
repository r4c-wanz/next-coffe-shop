"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, PlusIcon } from "lucide-react";
import Categories from "@/components/ui/Categories";
import { menuItems } from "@/data/menu";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const featuredItems = useMemo(
    () => menuItems.filter((item) => item.featured),
    [],
  );

  const filteredMenuItems = useMemo(() => {
    if (activeCategory === "Semua") return featuredItems;
    return featuredItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, featuredItems]);

  return (
    <section id="menu" className="flex h-[90dvh] items-center p-5">
      <div className="mx-auto max-w-323 flex-1">
        <h2 className="px-1 font-semibold text-[#666666]">Menu Kami</h2>
        <h3 className="mt-3 px-1 font-mono text-[32px] font-semibold text-[#3A5A40]">
          Pilihan Menu Favoritmu
        </h3>
        <div className="mt-6 flex items-center justify-between text-[#3A5A40]">
          <Categories
            activeCategory={activeCategory}
            onCategoryChangeAction={setActiveCategory}
          />
          <Link
            href="/menu"
            className="flex items-center gap-2 px-1 font-semibold"
          >
            Lihat Semua Menu <ArrowRightIcon size={20} />
          </Link>
        </div>
        {filteredMenuItems.length === 0 ? (
          <p className="mt-12 text-center font-semibold text-[#666666]">
            Menu tidak ditemukan.
          </p>
        ) : (
          <div className="mt-9 grid grid-cols-5 gap-7 text-sm font-bold">
            {filteredMenuItems.map((item) => (
              <div
                key={item.id}
                className="w-full rounded-4xl p-5.5 outline outline-[#DAD7CD]"
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
      </div>
    </section>
  );
}
