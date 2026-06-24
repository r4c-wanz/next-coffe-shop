import Navbar from "../component/Navbar";
import Image from "next/image";
import { ArrowRightIcon, CoffeeIcon, UserRoundIcon, HeartIcon, CheckCircleIcon } from "lucide-react";
import Link from "next/link";

export default function TentangKami() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#F6EFE8] overflow-hidden">
        <div className="absolute left-0 top-0 w-96 h-96 bg-[#3A5A40]/10 blur-[80px] rounded-br-[500px]"></div>
        <div className="mx-auto max-w-323 px-18.5 py-16 grid grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-[#E68B24] font-semibold">TENTANG KAMI</h2>
            <h1 className="mt-4 text-[#3A5A40] font-bold text-[48px] font-mono leading-tight">
              Lebih Dari Sekedar Kopi, Ini Tentang <span className="text-[#E68B24]">Cerita</span>
            </h1>
            <div className="mt-6 space-y-4 font-medium text-[#333333]">
              <p>Cituisi Coffee hadir dari kecintaan kami terhadap kopi berkualitas dan keingatan untuk menghadirkan pengalaman ngopi yang nyaman, hangat, dan berkesan.</p>
              <p>Setiap cangkir dirancak dari biji kopi pilihan dengan perhatian penuh dedikasi untuk menciptakan setiap momen terbaikmu.</p>
            </div>
            <Link href="/" className="mt-6 font-bold px-6.5 py-4 bg-[#3A5A40] text-white rounded-[20px] inline-flex gap-3.5 items-center">
              Kenali Kami Lebih Dalam <ArrowRightIcon />
            </Link>
          </div>
          <div className="relative">
            <Image 
              src="/tentang-kami-hero.png" 
              alt="Coffee Shop" 
              width={400} 
              height={300}
              className="rounded-[20px] w-full h-auto object-cover"
            />
            <div className="absolute bottom-6 right-6 bg-white rounded-[15px] px-5 py-3 shadow-lg">
              <p className="text-[#3A5A40] font-bold text-sm flex items-center gap-2">
                <CoffeeIcon size={20} />
                100% Arabica Pilihan Terbaik
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-18.5 py-16">
        <div className="mx-auto max-w-323">
          <h2 className="text-[#E68B24] font-semibold">KENAPA MEMILIH KAMI</h2>
          <h3 className="mt-3 text-[32px] font-mono font-semibold text-[#3A5A40]">
            Komitmen Kami Untuk Pengalaman Terbaik
          </h3>
          
          <div className="mt-9 grid grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F6EFE8] rounded-full flex items-center justify-center mx-auto">
                <CoffeeIcon size={32} className="text-[#3A5A40]" />
              </div>
              <h4 className="mt-4 font-semibold text-[#3A5A40]">Biji Kopi Berkualitas</h4>
              <p className="mt-2 text-sm text-[#666666] font-medium">Kami hanya menggunakan biji kopi pilihan dari petani lokal terbaik.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F6EFE8] rounded-full flex items-center justify-center mx-auto">
                <UserRoundIcon size={32} className="text-[#3A5A40]" />
              </div>
              <h4 className="mt-4 font-semibold text-[#3A5A40]">Barista Profesional</h4>
              <p className="mt-2 text-sm text-[#666666] font-medium">Dibuat oleh barista berpengalaman dengan sepenuh hati.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F6EFE8] rounded-full flex items-center justify-center mx-auto">
                <HeartIcon size={32} className="text-[#3A5A40]" />
              </div>
              <h4 className="mt-4 font-semibold text-[#3A5A40]">Susana Nyaman</h4>
              <p className="mt-2 text-sm text-[#666666] font-medium">Tempat ngopi yang nyaman untuk bekerja, bersantai, dan berkumpul.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F6EFE8] rounded-full flex items-center justify-center mx-auto">
                <CheckCircleIcon size={32} className="text-[#3A5A40]" />
              </div>
              <h4 className="mt-4 font-semibold text-[#3A5A40]">Pelayanan Terbaik</h4>
              <p className="mt-2 text-sm text-[#666666] font-medium">Kepuasan kamu adalah prioritas kami, selalu melayani terbaik.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-18.5 py-12">
        <div className="mx-auto max-w-323 bg-[#3A5A40] rounded-[20px] px-12.5 py-8">
          <div className="grid grid-cols-4 gap-8 text-white text-center">
            <div>
              <p className="text-5xl font-bold font-mono">10+</p>
              <p className="mt-2 font-medium">Tahun Pengalaman</p>
              <p className="text-sm text-[#E5E5E5] mt-1">Dalam industri kopi dan pelayanan terbaik.</p>
            </div>
            <div>
              <p className="text-5xl font-bold font-mono">50K+</p>
              <p className="mt-2 font-medium">Pelanggan Setia</p>
              <p className="text-sm text-[#E5E5E5] mt-1">Terima kasih untuk kepercayaan kalian.</p>
            </div>
            <div>
              <p className="text-5xl font-bold font-mono">20+</p>
              <p className="mt-2 font-medium">Barista Profesional</p>
              <p className="text-sm text-[#E5E5E5] mt-1">Siap menyajikan kopi terbaik untukmu.</p>
            </div>
            <div>
              <p className="text-5xl font-bold font-mono">100%</p>
              <p className="mt-2 font-medium">Arabika Premium</p>
              <p className="text-sm text-[#E5E5E5] mt-1">Kualitas terjamin dari biji pilihan kopi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="px-18.5 py-16">
        <div className="mx-auto max-w-323">
          <h2 className="text-[#E68B24] font-semibold">PER JALANAN KAMI</h2>
          <h3 className="mt-3 text-[32px] font-mono font-semibold text-[#3A5A40] mb-12">
            Setiap Langkah Penuh Makna
          </h3>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#3A5A40] rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div className="w-1 h-20 bg-[#DAD7CD] mt-4"></div>
              </div>
              <div className="pb-8">
                <h4 className="font-bold text-[#3A5A40] text-lg">2014 - Awal Mula</h4>
                <p className="text-[#666666] font-medium mt-2">Cituisi Coffee dimulai dari keinginan kami untuk menciptakan tempat yang lebih dari sekadar kedai kopi.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#3A5A40] rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div className="w-1 h-20 bg-[#DAD7CD] mt-4"></div>
              </div>
              <div className="pb-8">
                <h4 className="font-bold text-[#3A5A40] text-lg">2017 - Tumbuh Bersama</h4>
                <p className="text-[#666666] font-medium mt-2">Dukungan pelanggan membuat kami terus berkembang dan membuka cabang baru.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#3A5A40] rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div className="w-1 h-20 bg-[#DAD7CD] mt-4"></div>
              </div>
              <div className="pb-8">
                <h4 className="font-bold text-[#3A5A40] text-lg">2021 - Ekspansi</h4>
                <p className="text-[#666666] font-medium mt-2">Kami terus berinovasi dan memperluas jangkauan kami ke lebih banyak kota.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#3A5A40] rounded-full flex items-center justify-center text-white font-bold">4</div>
              </div>
              <div>
                <h4 className="font-bold text-[#3A5A40] text-lg">Hari Ini - Terus Berkaya</h4>
                <p className="text-[#666666] font-medium mt-2">Kami berkomitmen untuk terus memberikan yang terbaik untuk setiap pelanggan setia kami.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-18.5 py-16">
        <div className="mx-auto max-w-323">
          <h2 className="text-[#E68B24] font-semibold">SUASANA KEDAI KAMI</h2>
          <h3 className="mt-3 text-[32px] font-mono font-semibold text-[#3A5A40]">
            Nikmati Pengalaman Terbaik
          </h3>

          <div className="mt-9 grid grid-cols-5 gap-4">
            <div className="relative h-48 rounded-[15px] overflow-hidden">
              <Image 
                src="/gallery-1.png" 
                alt="Gallery 1" 
                fill
                className="object-cover hover:scale-110 transition duration-300 cursor-pointer"
              />
            </div>
            <div className="relative h-48 rounded-[15px] overflow-hidden">
              <Image 
                src="/gallery-2.png" 
                alt="Gallery 2" 
                fill
                className="object-cover hover:scale-110 transition duration-300 cursor-pointer"
              />
            </div>
            <div className="relative h-48 rounded-[15px] overflow-hidden">
              <Image 
                src="/gallery-3.png" 
                alt="Gallery 3" 
                fill
                className="object-cover hover:scale-110 transition duration-300 cursor-pointer"
              />
            </div>
            <div className="relative h-48 rounded-[15px] overflow-hidden">
              <Image 
                src="/gallery-4.png" 
                alt="Gallery 4" 
                fill
                className="object-cover hover:scale-110 transition duration-300 cursor-pointer"
              />
            </div>
            <div className="relative h-48 rounded-[15px] overflow-hidden">
              <Image 
                src="/gallery-5.png" 
                alt="Gallery 5" 
                fill
                className="object-cover hover:scale-110 transition duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-18.5 py-12">
        <div className="mx-auto max-w-323 bg-[#3A5A40] rounded-[20px] px-12.5 py-8">
          <div className="flex items-center justify-between gap-8">
            <div className="text-white">
              <div className="flex items-center gap-3">
                <CoffeeIcon size={32} />
                <h3 className="text-xl font-bold">Nikmati Kopi Terbaik Setiap Hari</h3>
              </div>
              <p className="mt-2 text-[#E5E5E5] font-medium">Bergabunglah dengan ribuan pelanggan setia kami dan dapatkan promo menarik setiap bulannya.</p>
            </div>
            <div className="flex items-center gap-3">
              <input 
                type="email" 
                placeholder="Masukkan email kamu" 
                className="bg-white rounded-[20px] text-[#333333] placeholder:text-[#999999] font-medium py-3 px-5 w-48"
              />
              <button className="bg-[#E68B24] text-white font-bold py-3 px-6 rounded-[20px] hover:bg-[#D07910] transition">
                Gabung Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12.5 text-white font-semibold">
        <div className="bg-[#3A5A40] px-11.5 py-10">
          <div className="mx-auto max-w-323 grid grid-cols-4 gap-12">
            <div>
              <h3 className="text-[#E68B24] font-bold text-lg">CITUISI COFFEE</h3>
              <p className="mt-3 text-[#E5E5E5] font-medium">Kopi pilihan dari biji terbaik, diseduh dengan dedikasi untuk kamu.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Menu</h3>
              <div className="flex flex-col gap-2 text-[#E5E5E5] font-medium text-sm">
                <Link href="/">Ice Coffee</Link>
                <Link href="/">Hot Coffee</Link>
                <Link href="/">Signature</Link>
                <Link href="/">Non Coffee</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Informasi</h3>
              <div className="flex flex-col gap-2 text-[#E5E5E5] font-medium text-sm">
                <Link href="/">Tentang Kami</Link>
                <Link href="/">Karir</Link>
                <Link href="/">Syarat & Ketentuan</Link>
                <Link href="/">Kebijakan Privasi</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Bantuan</h3>
              <div className="flex flex-col gap-2 text-[#E5E5E5] font-medium text-sm">
                <Link href="/">Perjalanan</Link>
                <Link href="/">Kontak Kami</Link>
                <Link href="/">FAQ</Link>
                <Link href="/">Download Aplikasi</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#344E41] py-2.5">
          <p className="text-center">&copy; 2024 Cituisi Coffee. All Right Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
