export default function Footer() {
  return (
    <footer className="font-semibold text-white">
      <div className="flex items-center justify-between bg-[#3A5A40] px-11.5 py-10">
        <div>
          <h2 className="font-mono text-[32px]">
            Gabung jadi member <span className="text-[#E68B24]">Cituisi</span>
          </h2>
          <p className="mt-3 max-w-86 text-[#E5E5E5]">
            Nikmati berbagai keuntungan dan promo eksklusif untuk setiap
            pembelianmu.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Masukkan email Anda"
            className="rounded-[20px] bg-white px-4 py-2 font-medium text-white placeholder:text-[#666666]"
          />
          <button className="cursor-pointer rounded-[20px] bg-[#E68B24] px-4 py-2 font-bold text-white">
            Gabung
          </button>
        </div>
      </div>
      <div className="bg-[#344E41] py-2.5">
        <p className="text-center">
          &copy; 2026 Cituisi Coffe. All Right Reserved.
        </p>
      </div>
    </footer>
  );
}
