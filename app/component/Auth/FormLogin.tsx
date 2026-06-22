"use client";

import Link from "next/link";

export default function FormLogin() {
  return (
    <div className="w-full max-w-md">
      <div className="rounded-lg border border-[#8B5E3C] p-8">
        <div className="flex w-full items-center justify-center pb-4"></div>
        <div className="flex w-full items-center gap-3 py-1">
          <div className="h-px flex-1 bg-[#8B5E3C]"></div>
          <h2 className="flex justify-center text-2xl font-semibold text-gray-700">
            Selamat Datang
          </h2>
          <div className="h-px flex-1 bg-[#8B5E3C]"></div>
        </div>
        <div className="mb-10 flex w-full justify-center text-sm text-gray-600">
          Masuk untuk melanjutkan ke akunmu
        </div>
        <form>
          <div>
            <span className="pb-1 text-xs text-gray-700">Email </span>
            <span className="text-red-400">*</span>
            <input
              placeholder="Masukkan Email"
              className="w-full rounded border border-[#8B5E3C] p-3 text-xs text-gray-700 focus:outline-none"
            />
          </div>
          <div className="pb-3">
            <span className="pb-1 text-xs text-gray-700">Password </span>
            <span className="text-red-400">*</span>
            <input
              placeholder="Masukkan Password"
              className="w-full rounded border border-[#8B5E3C] p-3 text-xs text-gray-700 focus:outline-none"
            />
          </div>
          <div className="flex w-full justify-end p-1 text-xs">
            <span className="cursor-pointer">Lupa Password ?</span>
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer rounded bg-[#8B5E3C] p-3 text-sm font-semibold text-white"
          >
            Masuk
          </button>
          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#8B5E3C]"></div>
            <span className="text-xs font-semibold text-gray-500">atau</span>
            <div className="h-px flex-1 bg-[#8B5E3C]"></div>
          </div>
          <div className="w-full">
            <Link
              href={"/register"}
              className="block w-full rounded border border-[#8B5E3C] p-3 text-center text-sm font-semibold text-[#8B5E3C] transition hover:bg-[#8B5E3C] hover:text-white"
            >
              Daftar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
