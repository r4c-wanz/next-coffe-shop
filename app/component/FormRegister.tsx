"use client";

import Link from "next/link";

export default function FormRegister() {
  return (
    <div className="w-full max-w-md">
      <div className="border rounded-lg border-[#8B5E3C] p-5">
        <div className="flex justify-center items-center w-full pb-1"></div>

        <div className="w-full flex gap-3 py-1 items-center">
          <div className="flex-1 h-px bg-[#8B5E3C]"></div>
          <h2 className="text-2xl font-semibold flex text-gray-700 justify-center">
            Daftar Akun
          </h2>
          <div className="flex-1 h-px bg-[#8B5E3C]"></div>
        </div>

        <div className="text-gray-600 text-sm w-full flex justify-center mb-4">
          Buat akun untuk melanjutkan
        </div>

        <form>
          <div className="mb-2">
            <span className="text-gray-700 text-xs pb-1">Nama Lengkap</span>
            <span className="text-red-400">*</span>
            <input
              type="text"
              placeholder="Masukkan Nama Lengkap"
              className="text-xs text-gray-700 border-[#8B5E3C] px-3 py-2.5 w-full rounded border focus:outline-none"
            />
          </div>

          <div className="mb-2">
            <span className="text-gray-700 text-xs pb-1">Email </span>
            <span className="text-red-400">*</span>
            <input
              type="email"
              placeholder="Masukkan Email"
              className="text-xs text-gray-700 border-[#8B5E3C] px-3 py-2.5 w-full rounded border focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <span className="text-gray-700 text-xs pb-1">No Handphone </span>
            <span className="text-red-400">*</span>
            <input
              type="email"
              placeholder="Masukkan No Handphone"
              className="text-xs text-gray-700 border-[#8B5E3C] px-3 py-2.5 w-full rounded border focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <span className="text-gray-700 text-xs pb-1">Password </span>
            <span className="text-red-400">*</span>
            <input
              type="text"
              placeholder="Masukkan Password"
              className="text-xs text-gray-700 border-[#8B5E3C] px-3 py-2.5 w-full rounded border focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <span className="text-gray-700 text-xs pb-1">
              Konfirmasi Password
            </span>
            <span className="text-red-400">*</span>
            <input
              type="text"
              placeholder="Masukkan Ulang Password"
              className="text-xs text-gray-700 border-[#8B5E3C] px-3 py-2.5 w-full rounded border focus:outline-none"
            />
          </div>
          <div className="flex w-full justify-end text-xs p-1 mb-1">
            <Link href="/login" className="cursor-pointer text-gray-700">
              Sudah Punya Akun?
            </Link>
          </div>

          <button
            type="submit"
            className="bg-[#8B5E3C] font-semibold w-full text-sm text-white p-2.5 rounded cursor-pointer"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}
