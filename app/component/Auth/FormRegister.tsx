"use client";

import Link from "next/link";
import LogoWithText from "../LogoWithText";
import PasswordInput from "./PasswordInput";

export default function FormRegister() {
  return (
    <div className="w-full max-w-md">
      <div className="flex w-full justify-center pb-5">
        <LogoWithText />
      </div>
      <h2 className="text-center font-mono text-[28px] font-semibold text-[#3A5A40]">
        Daftar Akun
      </h2>
      <p className="mt-2 text-center text-sm font-medium text-[#666666]">
        Buat akun untuk melanjutkan
      </p>
      <form className="mt-6">
        <div>
          <label className="text-sm font-semibold text-[#344E41]">
            Nama Lengkap <span className="text-[#E68B24]">*</span>
          </label>
          <input
            type="text"
            placeholder="Masukkan Nama Lengkap"
            className="mt-2 w-full rounded-lg p-3 text-sm font-medium text-[#344E41] outline-2 -outline-offset-2 outline-[#DAD7CD] placeholder:text-[#999999] focus:outline-[#3A5A40]"
          />
        </div>
        <div className="mt-4">
          <label className="text-sm font-semibold text-[#344E41]">
            Email <span className="text-[#E68B24]">*</span>
          </label>
          <input
            type="email"
            placeholder="Masukkan Email"
            className="mt-2 w-full rounded-lg p-3 text-sm font-medium text-[#344E41] outline-2 -outline-offset-2 outline-[#DAD7CD] placeholder:text-[#999999] focus:outline-[#3A5A40]"
          />
        </div>
        <div className="mt-4">
          <label className="text-sm font-semibold text-[#344E41]">
            No Handphone <span className="text-[#E68B24]">*</span>
          </label>
          <input
            type="tel"
            placeholder="Masukkan No Handphone"
            className="mt-2 w-full rounded-lg p-3 text-sm font-medium text-[#344E41] outline-2 -outline-offset-2 outline-[#DAD7CD] placeholder:text-[#999999] focus:outline-[#3A5A40]"
          />
        </div>
        <div className="mt-4">
          <PasswordInput
            label="Password"
            name="password"
            id="password"
            placeholder="Masukkan Password"
          />
        </div>
        <div className="mt-4">
          <PasswordInput
            label="Konfirmasi Password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Masukkan Ulang Password"
          />
        </div>
        <div className="mt-3 flex justify-end">
          <Link
            href="/login"
            className="cursor-pointer text-sm font-semibold text-[#3A5A40]"
          >
            Sudah Punya Akun?
          </Link>
        </div>
        <button
          type="submit"
          className="mt-6 w-full cursor-pointer rounded-xl bg-[#3A5A40] py-4 text-sm font-bold text-white"
        >
          Daftar
        </button>
      </form>
    </div>
  );
}
