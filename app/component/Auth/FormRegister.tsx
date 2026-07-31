"use client";

import Link from "next/link";
import IconInput from "./IconInput";
import ContactInput from "./ContactInput";
import PasswordInput from "./PasswordInput";
import { UserRoundIcon } from "lucide-react";

export default function FormRegister() {
  return (
    <div className="w-full max-w-md">
      <h1 className="text-center font-mono text-2xl font-semibold text-[#3A5A40]">
        Daftar Akun
      </h1>
      <p className="mt-2 text-center text-sm font-medium text-[#666666]">
        Buat akun untuk melanjutkan
      </p>
      <form className="mt-6">
        <IconInput
          label="Nama Lengkap"
          name="fullName"
          id="fullName"
          type="text"
          icon={UserRoundIcon}
          placeholder="Masukkan Nama Lengkap"
        />

        <div className="mt-4">
          <ContactInput />
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
