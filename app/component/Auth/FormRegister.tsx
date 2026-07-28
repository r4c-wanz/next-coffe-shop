"use client";

import Link from "next/link";
import LogoWithText from "../LogoWithText";
import PasswordInput from "./PasswordInput";
import { MailIcon, PhoneIcon, UserRoundIcon } from "lucide-react";

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
          <label className="relative">
            <input
              type="text"
              placeholder="Masukkan Nama Lengkap"
              className="mt-2 w-full rounded-lg p-3 text-sm font-medium text-[#344E41] outline-2 -outline-offset-2 outline-[#DAD7CD] placeholder:text-[#999999] focus:outline-[#3A5A40]"
            />
            <UserRoundIcon
              className="absolute top-1/2 right-4 -translate-y-1/2 text-[#666666]"
              strokeWidth={1.5}
            />
          </label>
        </div>
        <div className="mt-4">
          <label className="text-sm font-semibold text-[#344E41]">
            Email <span className="text-[#E68B24]">*</span>
          </label>
          <label className="relative">
            <input
              type="email"
              placeholder="Masukkan Email"
              className="mt-2 w-full rounded-lg p-3 text-sm font-medium text-[#344E41] outline-2 -outline-offset-2 outline-[#DAD7CD] placeholder:text-[#999999] focus:outline-[#3A5A40]"
            />
            <MailIcon
              className="absolute top-1/2 right-4 -translate-y-1/2 text-[#666666]"
              strokeWidth={1.5}
            />
          </label>
        </div>
        <div className="mt-4">
          <label className="text-sm font-semibold text-[#344E41]">
            No Handphone <span className="text-[#E68B24]">*</span>
          </label>
          <label className="relative">
            <input
              type="tel"
              placeholder="Masukkan No Handphone"
              className="mt-2 w-full rounded-lg p-3 text-sm font-medium text-[#344E41] outline-2 -outline-offset-2 outline-[#DAD7CD] placeholder:text-[#999999] focus:outline-[#3A5A40]"
            />
            <PhoneIcon
              className="absolute top-1/2 right-4 -translate-y-1/2 text-[#666666]"
              strokeWidth={1.5}
            />
          </label>
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
        <button
          type="submit"
          className="mt-6 w-full cursor-pointer rounded-xl bg-[#3A5A40] py-4 text-sm font-bold text-white"
        >
          Daftar
        </button>
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#DAD7CD]"></div>
          <span className="text-xs font-semibold text-[#666666]">atau</span>
          <div className="h-px flex-1 bg-[#DAD7CD]"></div>
        </div>
        <p className="mt-4 text-center text-sm font-semibold text-[#666666]">
          Sudah Punya Akun?{" "}
          <Link href="/login" className="text-[#E68B24]">
            Masuk Sekarang
          </Link>
        </p>
      </form>
    </div>
  );
}
