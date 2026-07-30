"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Categories from "../component/Categories";
import { menuItems } from "../data/menu";
import {
  ArrowRightIcon,
  CoffeeIcon,
  GiftIcon,
  PlusIcon,
  ShieldCheckIcon,
  StarIcon,
  TruckIcon,
} from "lucide-react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const featuredItems = useMemo(
    () => menuItems.filter((item) => item.featured),
    [],
  );

  const bestSellerItems = useMemo(
    () => menuItems.filter((item) => item.bestSeller),
    [],
  );

  const filteredMenuItems = useMemo(() => {
    if (activeCategory === "Semua") return featuredItems;
    return featuredItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, featuredItems]);

  const colors = ["bg-[#3A5A40]", "bg-[#3A5A40]", "bg-[#3B2010]"];

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

  const getInitials = (name: string) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
  };

  return (
    <>
      <div className="pb-7.5">
        <section
          id="hero"
          className="relative h-148 overflow-hidden bg-[#F6EFE8]"
        >
          <div className="absolute right-0">
            <Image
              src="/hero-img.png"
              alt="Hero"
              width={1097}
              height={617}
              className="mask-[linear-gradient(to_right,#FFFFFF00_0%,#FFFFFF_24%)]"
            />
            <div className="absolute inset-0 bg-black/30 mask-[linear-gradient(to_right,#FFFFFF00_0%,#FFFFFF_24%)]" />
          </div>
          <div className="absolute -top-47 -left-12.5 h-180 w-180 rounded-br-[500px] bg-white blur-[100px]"></div>
          <div className="absolute top-13.5 left-18.5 z-1 max-w-121 text-xl">
            <h2 className="font-semibold text-[#3A5A40]">
              Single Origin • Aceh
            </h2>
            <h1 className="mt-4 font-mono text-[64px] font-bold text-[#3A5A40]">
              Kopi yang Bicara dari <span className="text-[#E68B24]">Hati</span>
            </h1>
            <p className="mt-6 max-w-[384px] font-medium">
              Setiap cangkir adalah cerita dari kebun pilihan Aceh, diseduh
              dengan dedikasi, untuk kamu nikmati.
            </p>
            <Link
              href="/menu"
              className="mt-6 inline-flex items-center gap-3.5 rounded-[20px] bg-[#3A5A40] px-6.5 py-4 font-bold text-white"
            >
              Pesan Sekarang <ArrowRightIcon />
            </Link>
          </div>
        </section>
        <section id="features" className="relative z-1 -mt-16.5 p-5">
          <div className="mx-auto grid max-w-323 grid-cols-4 items-center justify-between gap-17.5 rounded-3xl bg-white px-12 py-10 outline -outline-offset-1 outline-[#DAD7CD]">
            <div className="flex items-center gap-7">
              <CoffeeIcon size={60} className="text-[#3A5A40]" />
              <div className="max-w-39.5">
                <h3 className="font-semibold text-[#000000]">
                  Diseduh Segar Setiap Hari
                </h3>
                <p className="mt-2 text-sm font-medium text-[#666666]">
                  Kualitas tebaik setiap saat
                </p>
              </div>
            </div>
            <div className="flex items-center gap-7">
              <TruckIcon size={60} className="text-[#3A5A40]" />
              <div className="max-w-39.5">
                <h3 className="font-semibold text-[#000000]">
                  Gratis Ongkir Min. 30K
                </h3>
                <p className="mt-2 text-sm font-medium text-[#666666]">
                  Lebih hemat, lebih nyaman
                </p>
              </div>
            </div>
            <div className="flex items-center gap-7">
              <GiftIcon size={60} className="text-[#3A5A40]" />
              <div className="max-w-39.5">
                <h3 className="font-semibold text-[#000000]">
                  Poin Reward Setiap Pembelian
                </h3>
                <p className="mt-2 text-sm font-medium text-[#666666]">
                  Kumpulkan poin, dapatkan benefit
                </p>
              </div>
            </div>
            <div className="flex items-center gap-7">
              <ShieldCheckIcon size={60} className="text-[#3A5A40]" />
              <div className="max-w-39.5">
                <h3 className="font-semibold text-[#000000]">
                  Pembayaran Aman & Terpecaya
                </h3>
                <p className="mt-2 text-sm font-medium text-[#666666]">
                  Transaksi aman, tenang berbelanja
                </p>
              </div>
            </div>
          </div>
        </section>
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
        <section id="promo" className="p-5">
          <div className="mx-auto max-w-323">
            <div className="relative overflow-hidden rounded-[20px] bg-[#F6EFE8] px-12.5 py-10">
              <div className="max-w-98">
                <h3 className="font-mono text-4xl font-semibold text-[#3A5A40]">
                  Temani Harimu Dengan Kopi{" "}
                  <span className="text-[#E68B24]">Terbaik</span>
                </h3>
                <p className="mt-2.5 font-medium">
                  Dari biji kopi pilihan, diracik oleh barista terbaik untuk
                  pengalaman ngopi yang tak terlupakan.
                </p>
                <Link
                  href="/"
                  className="mt-5 inline-flex items-center gap-3.5 rounded-[20px] bg-[#3A5A40] px-6.5 py-4 text-xl font-bold text-white"
                >
                  Eksplor Menu <ArrowRightIcon />
                </Link>
              </div>
              <div className="absolute top-0 right-0 bottom-0 w-190 bg-linear-to-r from-[rgba(240,240,240,0)] from-0% to-[#F0F0F0] to-20%"></div>
            </div>
          </div>
        </section>
        <section id="best-seller" className="flex h-[80dvh] items-center p-5">
          <div className="mx-auto max-w-323 flex-1">
            <h2 className="px-1 font-semibold text-[#666666]">Best Seller</h2>
            <h3 className="mt-3 px-1 font-mono text-[32px] font-semibold text-[#3A5A40]">
              Paling banyak dipesan
            </h3>
            <div className="mt-9 grid grid-cols-3 gap-7 text-sm font-bold">
              {bestSellerItems.map((item) => (
                <div
                  key={item.id}
                  className="flex w-full min-w-59 items-center gap-6.5 rounded-4xl p-5.5 outline outline-[#DAD7CD]"
                >
                  <div
                    id="placeholder"
                    className="relative h-full w-35 shrink-0 overflow-hidden rounded-[14px] bg-[#F0F0F0]"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-full">
                    <h4 className="">{item.name}</h4>
                    <p className="mt-2 text-[#666666]">{item.component}</p>
                    <div className="mt-6.5 flex items-center justify-between gap-3">
                      <p className="flex items-center gap-1.5">
                        Rp <span>{item.price.toLocaleString("id-ID")}</span>
                      </p>
                      <div className="flex items-center gap-1">
                        <StarIcon className="fill-[#E68B24] text-transparent" />
                        {`${item.rating}.5`}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="why-us" className="p-5">
          <div className="mx-auto max-w-323">
            <div className="relative overflow-hidden rounded-[20px] bg-[#3A5A40] px-12.5 py-7 text-white">
              <div className="">
                <h2 className="text-[#E5E5E5]">Kenapa pilih Cituisi Coffee?</h2>
                <h3 className="mt-2.5 font-mono text-[32px] font-semibold">
                  Lebih dari sekedar kopi
                </h3>
                <p className="mt-2.5 max-w-75.5 font-medium text-[#E5E5E5]">
                  Biji kopi berkualitas, proses terjaga, rasa yang selalu
                  konsisten
                </p>
              </div>
              <div className="absolute top-0 right-0 bottom-0 w-170 bg-linear-to-r from-[rgba(97,123,102,0)] from-0% to-[#617B66] to-20%"></div>
            </div>
          </div>
        </section>
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
                        {Array.from({ length: 5 }).map((_, index) => {
                          const starValue = index + 1;

                          return (
                            <StarIcon
                              key={index}
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
      </div>
    </>
  );
}
