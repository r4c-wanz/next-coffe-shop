"use client";

import Link from "next/link";
import { useActionState } from "react";
import { loginAction, type LoginState } from "../../actions/login";
import LogoWithText from "../LogoWithText";
import PasswordInput from "./PasswordInput";
import { MailIcon } from "lucide-react";

const initialState: LoginState = {};

export default function FormLogin() {
  const [state, formAction, isPending] = useActionState(
    loginAction,
    initialState,
  );

  return (
    <div className="w-full max-w-md">
      <div className="flex w-full justify-center pb-6">
        <LogoWithText />
      </div>
      <h2 className="text-center font-mono text-[28px] font-semibold text-[#3A5A40]">
        Selamat Datang Kembali
      </h2>
      <p className="mt-2 text-center text-sm font-medium text-[#666666]">
        Masuk untuk melanjutkan ke akunmu
      </p>
      <form action={formAction} className="mt-8">
        <div>
          <label
            htmlFor="email"
            className="text-sm font-semibold text-[#344E41]"
          >
            Email <span className="text-[#E68B24]">*</span>
          </label>
          <label className="relative">
            <input
              type="email"
              name="email"
              placeholder="Masukkan Email"
              id="email"
              className="mt-2 w-full rounded-lg p-3 text-sm font-medium text-[#344E41] outline-2 -outline-offset-2 outline-[#DAD7CD] placeholder:text-[#999999] focus:outline-[#3A5A40]"
            />
            <MailIcon
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

        {state?.error ? (
          <div className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 outline-2 -outline-offset-2 outline-red-200">
            {state.error}
          </div>
        ) : null}

        <div className="mt-3 flex justify-end">
          <span className="cursor-pointer text-sm font-semibold text-[#E68B24]">
            Lupa Password?
          </span>
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="mt-6 w-full cursor-pointer rounded-xl bg-[#3A5A40] py-4 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? "Memproses..." : "Masuk"}
        </button>
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#DAD7CD]"></div>
          <span className="text-xs font-semibold text-[#666666]">atau</span>
          <div className="h-px flex-1 bg-[#DAD7CD]"></div>
        </div>
        <p className="mt-4 text-center text-sm font-semibold text-[#666666]">
          Belum punya akun?{" "}
          <Link href="/register" className="text-[#E68B24]">
            Daftar Sekarang
          </Link>
        </p>
      </form>
    </div>
  );
}
