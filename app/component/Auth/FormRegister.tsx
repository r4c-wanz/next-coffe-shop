"use client";

import Link from "next/link";

export default function FormRegister() {
  return (
    <div className="w-full max-w-md">
      <div className="rounded-lg border border-[#8B5E3C] p-5">
        <div className="flex w-full items-center justify-center pb-1"></div>

        <div className="flex w-full items-center gap-3 py-1">
          <div className="h-px flex-1 bg-[#8B5E3C]"></div>
          <h2 className="flex justify-center text-2xl font-semibold text-gray-700">
            Daftar Akun
          </h2>
          <div className="h-px flex-1 bg-[#8B5E3C]"></div>
        </div>

        <div className="mb-4 flex w-full justify-center text-sm text-gray-600">
          Buat akun untuk melanjutkan
        </div>

        <form>
          <div className="mb-2">
            <span className="pb-1 text-xs text-gray-700">Nama Lengkap</span>
            <span className="text-red-400">*</span>
            <input
              type="text"
              placeholder="Masukkan Nama Lengkap"
              className="w-full rounded border border-[#8B5E3C] px-3 py-2.5 text-xs text-gray-700 focus:outline-none"
            />
          </div>

          <div className="mb-2">
            <span className="pb-1 text-xs text-gray-700">Email </span>
            <span className="text-red-400">*</span>
            <input
              type="email"
              placeholder="Masukkan Email"
              className="w-full rounded border border-[#8B5E3C] px-3 py-2.5 text-xs text-gray-700 focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <span className="pb-1 text-xs text-gray-700">No Handphone </span>
            <span className="text-red-400">*</span>
            <input
              type="email"
              placeholder="Masukkan No Handphone"
              className="w-full rounded border border-[#8B5E3C] px-3 py-2.5 text-xs text-gray-700 focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <span className="pb-1 text-xs text-gray-700">Password </span>
            <span className="text-red-400">*</span>
            <input
              type="text"
              placeholder="Masukkan Password"
              className="w-full rounded border border-[#8B5E3C] px-3 py-2.5 text-xs text-gray-700 focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <span className="pb-1 text-xs text-gray-700">
              Konfirmasi Password
            </span>
            <span className="text-red-400">*</span>
            <input
              type="text"
              placeholder="Masukkan Ulang Password"
              className="w-full rounded border border-[#8B5E3C] px-3 py-2.5 text-xs text-gray-700 focus:outline-none"
            />
          </div>
          <div className="mb-1 flex w-full justify-end p-1 text-xs">
            <Link href="/login" className="cursor-pointer text-gray-700">
              Sudah Punya Akun?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded bg-[#8B5E3C] p-2.5 text-sm font-semibold text-white"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}
