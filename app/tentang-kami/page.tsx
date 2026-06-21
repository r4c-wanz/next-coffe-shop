import Navbar from "../component/NavbarKopi";
import Image from "next/image";

export default function TentangKami() {
  return (
    <div className="bg-[#0B0B0B] text-white font-sans min-h-screen">
      <Navbar />

      <section className="flex px-10 py-16 gap-10 items-center relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-500/20 blur-3xl rounded-full"></div>

        <div className="w-1/2 relative z-10">
          <h1 className="text-3xl font-bold text-[#4CAF7A] text-center mb-5">
            Cerita Citusi Coffee
          </h1>

          <div className="text-gray-300 leading-relaxed text-justify">
            Citusi Coffee hadir dari kecintaan kami pada kopi berkualitas dan
            suasana hangat yang menemani setiap cerita, di mana setiap cangkir
            kami racik dengan penuh perhatian untuk menghadirkan rasa yang
            nyaman, tenang, dan berkesan seperti senja yang singgah sebentar di
            tengah kesibukan hari. Kami percaya bahwa kopi bukan hanya tentang
            rasa, tetapi tentang momen kecil yang memberi ruang untuk bernapas
            di tengah padatnya kehidupan. Setiap biji kopi yang kami pilih
            melalui proses yang teliti agar setiap tegukan menghadirkan kualitas
            terbaik dan konsistensi rasa yang selalu terjaga.
          </div>

          <button className="mt-6 bg-[#4CAF7A] text-black px-5 py-2.5 rounded-full shadow hover:opacity-90 transition">
            Masuk Sekarang →
          </button>
        </div>

        <div className="w-1/2 relative z-10">
          <Image
            src="/Foto Tentang Kami.png"
            alt="about coffee"
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-[380px]"
          />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center gap-12 px-10 py-20">
        <div className="lg:w-1/2 space-y-5">
          <h2 className="text-3xl font-bold text-[#4CAF7A]">
            Biji Kopi Berkualitas
          </h2>

          <p className="text-gray-300 leading-relaxed text-justify">
            Kami memilih biji kopi terbaik dari berbagai daerah dengan proses
            seleksi ketat, untuk menghasilkan rasa yang konsisten, aroma yang
            kuat, dan karakter kopi yang khas di setiap cangkir Citusi Coffee.
          </p>
        </div>

        <div className="lg:w-1/2">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/biji-kopi.png"
              alt="Biji Kopi"
              width={600}
              height={400}
              className="w-full h-[380px] object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row-reverse items-center gap-12 px-10 py-20 bg-[#0F0F0F]">
        <div className="lg:w-1/2 space-y-5">
          <h2 className="text-3xl font-bold text-[#4CAF7A]">
            Barista Profesional
          </h2>

          <p className="text-gray-300 leading-relaxed text-justify">
            Setiap minuman diracik oleh barista berpengalaman dengan teknik
            presisi untuk menjaga kualitas, rasa, dan konsistensi di setiap
            sajian.
          </p>
        </div>

        <div className="lg:w-1/2">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/barista.png"
              alt="Barista"
              width={600}
              height={400}
              className="w-full h-[380px] object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row items-center gap-12 px-10 py-20">
        <div className="lg:w-1/2 space-y-5">
          <h2 className="text-3xl font-bold text-[#4CAF7A]">Suasana Nyaman</h2>

          <p className="text-gray-300 leading-relaxed text-justify">
            Citusi Coffee dirancang sebagai ruang yang nyaman untuk bekerja,
            bersantai, maupun berbincang. Suasana hangat menjadi bagian penting
            dari pengalaman kopi kami.
          </p>
        </div>

        <div className="lg:w-1/2">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/cafe.png"
              alt="Suasana Cafe"
              width={600}
              height={400}
              className="w-full h-[380px] object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#0F2A1E] text-white grid grid-cols-4 text-center py-12 font-medium">
        <div>
          <div className="text-xl font-bold">10+</div>
          <div className="text-sm text-gray-300">Tahun Pengalaman</div>
        </div>
        <div>
          <div className="text-xl font-bold">50K+</div>
          <div className="text-sm text-gray-300">Pelanggan Setia</div>
        </div>
        <div>
          <div className="text-xl font-bold">20+</div>
          <div className="text-sm text-gray-300">Barista Profesional</div>
        </div>
        <div>
          <div className="text-xl font-bold">100%</div>
          <div className="text-sm text-gray-300">Arabika Premium</div>
        </div>
      </section>

      <section className="grid grid-cols-4 gap-4 px-10 py-12 bg-[#0B0B0B]">
        <div className="relative h-40 rounded-lg overflow-hidden">
          <Image
            src="/5 Foto.jpg"
            alt="Galeri Citusi 1"
            fill
            className="object-cover hover:scale-105 transition duration-300"
          />
        </div>

        <div className="relative h-40 rounded-lg overflow-hidden">
          <Image
            src="/8 Foto.png"
            alt="Galeri Citusi 2"
            fill
            className="object-cover hover:scale-105 transition duration-300"
          />
        </div>

        <div className="relative h-40 rounded-lg overflow-hidden">
          <Image
            src="/6 Foto.jpg"
            alt="Galeri Citusi 3"
            fill
            className="object-cover hover:scale-105 transition duration-300"
          />
        </div>

        <div className="relative h-40 rounded-lg overflow-hidden">
          <Image
            src="/7 Foto.png"
            alt="Galeri Citusi 4"
            fill
            className="object-cover hover:scale-105 transition duration-300"
          />
        </div>
      </section>

      <footer className="bg-[#0B0B0B] border-t border-white/10 text-white px-10 py-12 grid grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg text-[#4CAF7A]">CITUSI COFFEE</h3>
          <p className="text-sm mt-2 text-gray-400 leading-relaxed">
            Kopi terbaik dari biji pilihan...
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">Menu</h3>
          <div className="flex flex-col gap-1.5 text-sm text-gray-400">
            <a href="#" className="hover:text-white">
              Beranda
            </a>
            <a href="#" className="hover:text-white">
              Menu
            </a>
            <a href="#" className="hover:text-white">
              Tentang Kami
            </a>
            <a href="#" className="hover:text-white">
              Kontak
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">Kontak</h3>
          <div className="flex flex-col gap-1.5 text-sm text-gray-400">
            <p>Jl. Duri Kosambi No 90</p>
            <p>088210272990</p>
            <p>citusi@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
