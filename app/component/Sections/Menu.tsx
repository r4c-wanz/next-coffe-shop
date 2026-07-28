import { useMemo, useState } from "react";
import Categories from "../Categories";
import Link from "next/link";
import { ArrowRightIcon, PlusIcon } from "lucide-react";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const menuItems = [
    {
      name: "Es Tiramisu Latte",
      component: "Kopi + Susu + Tiramisu",
      price: 30000,
      category: "Ice Coffee",
    },
    {
      name: "Es Cappucino Latte",
      component: "Kopi + Susu + Cincau",
      price: 30000,
      category: "Ice Coffee",
    },
    {
      name: "Es Latte Pandan",
      component: "Kopi + Susu + Pandan",
      price: 30000,
      category: "Signature",
    },
    {
      name: "Es Americano",
      component: "Kopi + Air + Es",
      price: 30000,
      category: "Ice Coffee",
    },
    {
      name: "Es Caramel Latte",
      component: "Kopi + Susu + Caramel",
      price: 30000,
      category: "Ice Coffee",
    },
  ];

  const filteredMenuItems = useMemo(() => {
    if (activeCategory === "Semua") return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

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
            onCategoryChange={setActiveCategory}
          />
          <Link href="/" className="flex items-center gap-2 px-1 font-semibold">
            Lihat Semua Menu <ArrowRightIcon size={20} />
          </Link>
        </div>
        {filteredMenuItems.length === 0 ? (
          <p className="mt-12 text-center font-semibold text-[#666666]">
            Menu tidak ditemukan.
          </p>
        ) : (
          <div className="mt-9 grid grid-cols-5 gap-7 text-sm font-bold">
            {filteredMenuItems.map((item, index) => (
              <div
                key={index}
                className="w-full rounded-4xl p-5.5 outline outline-[#DAD7CD]"
              >
                <div
                  id="placeholder"
                  className="h-30.5 rounded-[14px] bg-[#F0F0F0]"
                />
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
