"use client";

import Link from "next/link";

export default function FormLogin() {
  return (
    <div className="w-full max-w-md">
      <div className=" border rounded-lg border-[#8B5E3C] p-8">
        <div className="flex justify-center items-center w-full pb-4"></div>
        <div className="w-full flex gap-3 py-1 items-center">
          <div className="flex-1 h-px bg-[#8B5E3C]"></div>
          <h2 className="text-2xl font-semibold flex text-gray-700 justify-center">
            Selamat Datang
          </h2>
          <div className="flex-1 h-px bg-[#8B5E3C]"></div>
        </div>
        <div className="text-gray-600 text-sm w-full flex justify-center mb-10">
          Masuk untuk melanjutkan ke akunmu
        </div>
        <form>
          <div>
            <span className="text-gray-700 text-xs pb-1">Email </span>
            <span className="text-red-400">*</span>
            <input
              placeholder="Masukkan Email"
              className="text-xs text-gray-700 border-[#8B5E3C] p-3 w-full rounded border focus:outline-none"/>
          </div>
            <div className="pb-3">
             <span className="text-gray-700 text-xs pb-1">Password </span>
              <span className="text-red-400">*</span>
                <input
              placeholder="Masukkan Password"
              className="text-xs text-gray-700 border-[#8B5E3C] p-3 w-full rounded border focus:outline-none"/>
          </div>
            <div className="flex w-full justify-end text-xs p-1 ">
             <span className="cursor-pointer">Lupa Password ?</span>
              </div>
               <button
                type="submit"
                className="bg-[#8B5E3C] font-semibold w-full text-sm text-white p-3 rounded cursor-pointer">
            Masuk
          </button>
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-[#8B5E3C]"></div>
            <span className="text-xs text-gray-500 font-semibold">atau</span>
            <div className="flex-1 h-px bg-[#8B5E3C]"></div>
          </div>
          <div className="w-full">
            <Link
              href={"/register"}
              className="block text-center font-semibold text-[#8B5E3C] w-full border border-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-white p-3 text-sm rounded transition"
            >
              Daftar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
