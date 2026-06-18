import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CoffeeIcon, GiftIcon, PlusIcon, ShieldCheckIcon, StarIcon, TruckIcon } from "lucide-react";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="hero" className="relative h-148 bg-[#F6EFE8] overflow-hidden">
        <div className="absolute right-0">
          <Image src="/hero-img.png" alt="Hero" width={1097} height={617} className="mask-[linear-gradient(to_right,#FFFFFF00_0%,#FFFFFF_24%)]" />
          <div className="absolute inset-0 bg-black/30 mask-[linear-gradient(to_right,#FFFFFF00_0%,#FFFFFF_24%)]" />
        </div>
        <div className="absolute -left-12.5 -top-47 w-180 h-180 bg-white blur-[100px] rounded-br-[500px]"></div>
        <div className="absolute left-18.5 top-13.5 z-1 text-xl max-w-121">
          <h2 className="text-[#3A5A40] font-semibold">Single Origin • Aceh</h2>
          <h1 className="mt-4 text-[#3A5A40] font-bold text-[64px] font-mono">Kopi yang Bicara dari <span className="text-[#E68B24]">Hati</span></h1>
          <p className="mt-6 font-medium max-w-[384px]">Setiap cangkir adalah cerita dari kebun pilihan Aceh, diseduh dengan dedikasi, untuk kamu nikmati.</p>
          <Link href="/" className="mt-6 font-bold px-6.5 py-4 bg-[#3A5A40] text-white rounded-[20px] inline-flex gap-3.5 items-center">Pesan Sekarang <ArrowRightIcon /></Link>
        </div>
      </section>
      <section id="features" className="relative z-1 px-18.5 -mt-11.5">
        <div className="mx-auto max-w-323 bg-white outline outline-[#DAD7CD] -outline-offset-1 rounded-3xl px-12 py-10 flex items-center justify-between gap-17.5">
          <div className="flex items-center gap-7">
            <CoffeeIcon size={60} className="text-[#3A5A40]" />
            <div className="max-w-39.5">
              <h3 className="text-[#000000] font-semibold">Diseduh Segar Setiap Hari</h3>
              <p className="mt-2 text-sm text-[#666666] font-medium">Kualitas tebaik setiap saat</p>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <TruckIcon size={60} className="text-[#3A5A40]" />
            <div className="max-w-39.5">
              <h3 className="text-[#000000] font-semibold">Gratis Ongkir Min. 30K</h3>
              <p className="mt-2 text-sm text-[#666666] font-medium max-w-34.5">Lebih hemat, lebih nyaman</p>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <GiftIcon size={60} className="text-[#3A5A40]" />
            <div className="max-w-39.5">
              <h3 className="text-[#000000] font-semibold">Poin Reward Setiap Pembelian</h3>
              <p className="mt-2 text-sm text-[#666666] font-medium">Kumpulkan poin, dapatkan benefit</p>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <ShieldCheckIcon size={60} className="text-[#3A5A40]" />
            <div className="max-w-39.5">
              <h3 className="text-[#000000] font-semibold">Pembayaran Aman & Terpecaya</h3>
              <p className="mt-2 text-sm text-[#666666] font-medium">Transaksi aman, tenang  berbelanja</p>
            </div>
          </div>
        </div>
      </section>
      <section id="menu" className="mt-10.5 px-18.5">
        <div className="mx-auto max-w-323">
          <h2 className="font-semibold text-[#666666] px-1">Menu Kami</h2>
          <h3 className="mt-3 text-[32px] font-mono font-semibold text-[#3A5A40] px-1">Pilihan Menu Favoritmu</h3>
          <div className="mt-6 flex items-center justify-between text-[#3A5A40]">
            <div className="bg-[#F6EFE8] outline-2 outline-[#DAD7CD] -outline-offset-2 rounded-[10px] h-10 flex gap-4">
              <div className="relative z-1 px-5 h-full bg-[#3A5A40] rounded-[10px] text-white font-semibold text-sm flex items-center justify-center">Semua</div>
              <div className="relative z-1 px-5 h-full rounded-[10px] font-semibold text-sm flex items-center justify-center">Ice Coffe</div>
              <div className="relative z-1 px-5 h-full rounded-[10px] font-semibold text-sm flex items-center justify-center">Hot Coffe</div>
              <div className="relative z-1 px-5 h-full rounded-[10px] font-semibold text-sm flex items-center justify-center">Signature</div>
              <div className="relative z-1 px-5 h-full rounded-[10px] font-semibold text-sm flex items-center justify-center">Non Coffe</div>
            </div>
            <Link href="/" className="flex items-center font-semibold gap-2 px-1">
              Lihat Semua Menu <ArrowRightIcon size={20} />
            </Link>
          </div>
          <div className="mt-9 text-sm font-bold flex gap-7">
            <div className="p-5.5 outline outline-[#DAD7CD] rounded-4xl min-w-59">
              <div id="placeholder" className="bg-[#F0F0F0] h-30.5 rounded-[14px]" />
              <h4 className="mt-5">Es Tiramisu Latte</h4>
              <p className="mt-2 text-[#666666]">Kopi + Susu + Tiramisu</p>
              <div className="mt-6.5 flex items-center justify-between gap-3">
                <p className="flex gap-1.5">Rp <span>30.000</span></p>
                <button className="w-7.5 h-7.5 bg-[#3A5A40] rounded-full text-white flex items-center justify-center cursor-pointer"><PlusIcon /></button>
              </div>
            </div>
            <div className="p-5.5 outline outline-[#DAD7CD] rounded-4xl min-w-59">
              <div id="placeholder" className="bg-[#F0F0F0] h-30.5 rounded-[14px]" />
              <h4 className="mt-5">Es Cappucino Latte</h4>
              <p className="mt-2 text-[#666666]">Kopi + Susu + Cincau</p>
              <div className="mt-6.5 flex items-center justify-between gap-3">
                <p className="flex gap-1.5">Rp <span>30.000</span></p>
                <button className="w-7.5 h-7.5 bg-[#3A5A40] rounded-full text-white flex items-center justify-center cursor-pointer"><PlusIcon /></button>
              </div>
            </div>
            <div className="p-5.5 outline outline-[#DAD7CD] rounded-4xl min-w-59">
              <div id="placeholder" className="bg-[#F0F0F0] h-30.5 rounded-[14px]" />
              <h4 className="mt-5">Es Latte Pandan</h4>
              <p className="mt-2 text-[#666666]">Kopi + Susu + Pandan</p>
              <div className="mt-6.5 flex items-center justify-between gap-3">
                <p className="flex gap-1.5">Rp <span>30.000</span></p>
                <button className="w-7.5 h-7.5 bg-[#3A5A40] rounded-full text-white flex items-center justify-center cursor-pointer"><PlusIcon /></button>
              </div>
            </div>
            <div className="p-5.5 outline outline-[#DAD7CD] rounded-4xl min-w-59">
              <div id="placeholder" className="bg-[#F0F0F0] h-30.5 rounded-[14px]" />
              <h4 className="mt-5">Es  Americano</h4>
              <p className="mt-2 text-[#666666]">Kopi + Air + Es</p>
              <div className="mt-6.5 flex items-center justify-between gap-3">
                <p className="flex gap-1.5">Rp <span>30.000</span></p>
                <button className="w-7.5 h-7.5 bg-[#3A5A40] rounded-full text-white flex items-center justify-center cursor-pointer"><PlusIcon /></button>
              </div>
            </div>
            <div className="p-5.5 outline outline-[#DAD7CD] rounded-4xl min-w-59">
              <div id="placeholder" className="bg-[#F0F0F0] h-30.5 rounded-[14px]" />
              <h4 className="mt-5">Es Caramel Latte</h4>
              <p className="mt-2 text-[#666666]">Kopi + Susu + Caramel</p>
              <div className="mt-6.5 flex items-center justify-between gap-3">
                <p className="flex gap-1.5">Rp <span>30.000</span></p>
                <button className="w-7.5 h-7.5 bg-[#3A5A40] rounded-full text-white flex items-center justify-center cursor-pointer"><PlusIcon /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="promo" className="mt-10 px-18.5">
        <div className="mx-auto max-w-323">
          <div className="relative bg-[#F6EFE8] rounded-[20px] px-12.5 py-10 overflow-hidden">
            <div className="max-w-98">
              <h3 className="text-[#3A5A40] font-semibold text-4xl font-mono">Temani Harimu Dengan Kopi <span className="text-[#E68B24]">Terbaik</span></h3>
              <p className="mt-2.5 font-medium">Dari biji kopi pilihan, diracik oleh barista terbaik untuk pengalaman ngopi yang tak terlupakan.</p>
              <Link href="/" className="mt-5 font-bold px-6.5 py-4 bg-[#3A5A40] text-xl text-white rounded-[20px] inline-flex gap-3.5 items-center">Ekslor Menu <ArrowRightIcon /></Link>
            </div>
            <div className="absolute w-190 top-0 right-0 bottom-0 bg-linear-to-r from-[rgba(240,240,240,0)] from-0% to-[#F0F0F0] to-20%"></div>
          </div>
        </div>
      </section>
      <section id="best-seller" className="mt-10 px-18.5">
        <div className="mx-auto max-w-323">
          <h2 className="font-semibold text-[#666666] px-1">Best Seller</h2>
          <h3 className="mt-3 text-[32px] font-mono font-semibold text-[#3A5A40] px-1">Paling banyak dipesan</h3>
          <div className="mt-6 flex items-center justify-between text-[#3A5A40]">
            <div className="bg-[#F6EFE8] outline-2 outline-[#DAD7CD] -outline-offset-2 rounded-[10px] h-10 flex gap-4">
              <div className="relative z-1 px-5 h-full bg-[#3A5A40] rounded-[10px] text-white font-semibold text-sm flex items-center justify-center">Semua</div>
              <div className="relative z-1 px-5 h-full rounded-[10px] font-semibold text-sm flex items-center justify-center">Ice Coffe</div>
              <div className="relative z-1 px-5 h-full rounded-[10px] font-semibold text-sm flex items-center justify-center">Hot Coffe</div>
              <div className="relative z-1 px-5 h-full rounded-[10px] font-semibold text-sm flex items-center justify-center">Signature</div>
              <div className="relative z-1 px-5 h-full rounded-[10px] font-semibold text-sm flex items-center justify-center">Non Coffe</div>
            </div>
            <Link href="/" className="flex items-center font-semibold gap-2 px-1">
              Lihat Semua Menu <ArrowRightIcon size={20} />
            </Link>
          </div>
          <div className="mt-9 text-sm font-bold flex gap-7">
            <div className="w-full flex gap-6.5 items-center p-5.5 outline outline-[#DAD7CD] rounded-4xl min-w-59">
              <div id="placeholder" className="bg-[#F0F0F0] w-35 h-full rounded-[14px] shrink-0" />
              <div className="w-full">
                <h4 className="">Es Tiramisu Latte</h4>
                <p className="mt-2 text-[#666666]">Kopi + Susu + Tiramisu</p>
                <div className="mt-6.5 flex items-center justify-between gap-3">
                  <p className="flex gap-1.5 items-center">Rp <span>30.000</span></p>
                  <div className="flex items-center gap-1"><StarIcon className="fill-[#E68B24] text-transparent" /> 4.9</div>
                </div>
              </div>
            </div>
            <div className="w-full flex gap-6.5 items-center p-5.5 outline outline-[#DAD7CD] rounded-4xl min-w-59">
              <div id="placeholder" className="bg-[#F0F0F0] w-35 h-full rounded-[14px] shrink-0" />
              <div className="w-full">
                <h4 className="">Es Latte Pandan</h4>
                <p className="mt-2 text-[#666666]">Kopi + Susu + Pandan</p>
                <div className="mt-6.5 flex items-center justify-between gap-3">
                  <p className="flex gap-1.5 items-center">Rp <span>30.000</span></p>
                  <div className="flex items-center gap-1"><StarIcon className="fill-[#E68B24] text-transparent" /> 4.9</div>
                </div>
              </div>
            </div>
            <div className="w-full flex gap-6.5 items-center p-5.5 outline outline-[#DAD7CD] rounded-4xl min-w-59">
              <div id="placeholder" className="bg-[#F0F0F0] w-35 h-full rounded-[14px] shrink-0" />
              <div className="w-full">
                <h4 className="">Es Caramel Latte</h4>
                <p className="mt-2 text-[#666666]">Kopi + Susu + Caramel</p>
                <div className="mt-6.5 flex items-center justify-between gap-3">
                  <p className="flex gap-1.5 items-center">Rp <span>30.000</span></p>
                  <div className="flex items-center gap-1"><StarIcon className="fill-[#E68B24] text-transparent" /> 4.9</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="why-us" className="mt-10 px-18.5">
        <div className="mx-auto max-w-323">
          <div className="relative bg-[#3A5A40] text-white rounded-[20px] px-12.5 py-7 overflow-hidden">
            <div className="">
              <h2 className="text-[#E5E5E5]">Kenapa pilih Cituisi Coffe?</h2>
              <h3 className="mt-2.5 font-semibold text-[32px] font-mono">Lebih dari sekedar kopi</h3>
              <p className="max-w-75.5 mt-2.5 font-medium text-[#E5E5E5]">Biji kopi berkualitas, proses terjaga, rasa yang selalu konsisten</p>
            </div>
            <div className="absolute w-170 top-0 right-0 bottom-0 bg-linear-to-r from-[rgba(97,123,102,0)] from-0% to-[#617B66] to-20%"></div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="mt-10 px-18.5">
        <div className="mx-auto max-w-323">
          <h2 className="font-semibold text-[#666666] px-1">Apa kata mereka?</h2>
          <h3 className="mt-3 text-[32px] font-mono font-semibold text-[#3A5A40] px-1">Cerita dari pecinta kopi</h3>
          <div className="mt-9 text-sm font-bold flex gap-7">
            <div className="w-full flex gap-6.5 items-center p-5.5 outline outline-[#DAD7CD] rounded-4xl min-w-59">
              <div id="photo-profile" className="bg-[#3A5A40] w-27.5 h-27.5 rounded-full shrink-0 text-4xl text-white flex items-center justify-center">CB</div>
              <div className="w-full">
                <h4 className="">Chandra Budiman</h4>
                <div className="mt-1.5 flex items-center gap-1">
                  <StarIcon size={16} className="fill-[#E68B24] text-transparent" />
                  <StarIcon size={16} className="fill-[#E68B24] text-transparent" />
                  <StarIcon size={16} className="fill-[#E68B24] text-transparent" />
                  <StarIcon size={16} className="fill-[#E68B24] text-transparent" />
                  <StarIcon size={16} className="fill-[#E68B24] text-transparent" />
                </div>
                <p className="mt-3 text-[#666666] font-semibold">“Es Tiramisu Latte juara! Rasanya pas, manisnya natural dan kopinya terasa  banget”</p>
              </div>
            </div>
            <div className="w-full flex gap-6.5 items-center p-5.5 outline outline-[#DAD7CD] rounded-4xl min-w-59">
              <div id="photo-profile" className="bg-[#3A5A40] w-27.5 h-27.5 rounded-full shrink-0 text-4xl text-white flex items-center justify-center">RS</div>
              <div className="w-full">
                <h4 className="">Rachel Setyawan</h4>
                <div className="mt-1.5 flex items-center gap-1">
                  <StarIcon size={16} className="fill-[#E68B24] text-transparent" />
                  <StarIcon size={16} className="fill-[#E68B24] text-transparent" />
                  <StarIcon size={16} className="fill-[#E68B24] text-transparent" />
                  <StarIcon size={16} className="fill-[#E68B24] text-transparent" />
                  <StarIcon size={16} className="fill-[#E68B24] text-transparent" />
                </div>
                <p className="mt-3 text-[#666666] font-semibold">“Es Americano di sini paling enak! Segar, strong dan bikin melek sepanjang hari”</p>
              </div>
            </div>
            <div className="w-full flex gap-6.5 items-center p-5.5 outline outline-[#DAD7CD] rounded-4xl min-w-59">
              <div id="photo-profile" className="bg-[#3B2010] w-27.5 h-27.5 rounded-full shrink-0 text-4xl text-white flex items-center justify-center">ZR</div>
              <div className="w-full">
                <h4 className="">Zakhi Ramadhan</h4>
                <div className="mt-1.5 flex items-center gap-1">
                  <StarIcon size={16} className="fill-[#E68B24] text-transparent" />
                  <StarIcon size={16} className="fill-[#E68B24] text-transparent" />
                  <StarIcon size={16} className="fill-[#E68B24] text-transparent" />
                  <StarIcon size={16} className="fill-[#E68B24] text-transparent" />
                  <StarIcon size={16} className="fill-[#666666] text-transparent" />
                </div>
                <p className="mt-3 text-[#666666] font-semibold">“Es Caramelnya di sini paling the best! Bisa ditingkatkan lagi pelayanannya”</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="mt-12.5 text-white font-semibold">
        <div className="bg-[#3A5A40] px-11.5 py-10 flex items-center justify-between">
          <div>
            <h2 className="text-[32px] font-mono">Gabung jadi member <span className="text-[#E68B24]">Cituisi</span></h2>
            <p className="mt-3 text-[#E5E5E5] max-w-86">Nikmati berbagai keuntungan dan promo eksklusif untuk setiap pembelianmu.</p>
          </div>
          <div className="flex items-center gap-3">
            <input type="text" placeholder="Masukkan email Anda" className="bg-white rounded-[20px] text-white placeholder:text-[#666666] font-medium py-2 px-4" />
            <button className="bg-[#E68B24] rounded-[20px] text-white font-bold py-2 px-4 cursor-pointer">
              Gabung
            </button>
          </div>
        </div>
        <div className="bg-[#344E41] py-2.5">
          <p className="text-center">&copy; 2026 Cituisi Coffe. All Right Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
