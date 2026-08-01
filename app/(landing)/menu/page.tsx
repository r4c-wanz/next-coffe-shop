import ProductBrowser from "@/components/sections/menu/ProductBrowser";
import MenuWhyUsSection from "@/components/sections/menu/MenuWhyUsSection";

export default function MenuPage() {
  return (
    <div className="pb-7.5">
      <section id="menu" className="p-5">
        <div className="mx-auto max-w-323">
          <h1 className="px-1 font-mono text-[32px] font-semibold text-[#3A5A40]">
            Menu Kami
          </h1>
          <h2 className="mt-3 px-1 font-semibold text-[#666666]">
            Temukan berbagai pilihan minuman kopi terbaik kami.
          </h2>
          <ProductBrowser />
        </div>
      </section>
      <MenuWhyUsSection />
    </div>
  );
}
