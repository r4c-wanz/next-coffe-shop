"use client";

import Link from "next/link";
import { useActionState } from "react";
import { loginAction, type LoginState } from "../../actions/login";
import LogoWithText from "../LogoWithText";

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
          <label className="text-sm font-semibold text-[#344E41]">
            Email <span className="text-[#E68B24]">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Masukkan Email"
            className="mt-2 w-full rounded-[10px] p-3 text-sm font-medium text-[#344E41] outline-2 -outline-offset-2 outline-[#DAD7CD] placeholder:text-[#999999] focus:outline-[#3A5A40]"
          />
        </div>
        <div className="mt-4">
          <label className="text-sm font-semibold text-[#344E41]">
            Password <span className="text-[#E68B24]">*</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Masukkan Password"
            className="mt-2 w-full rounded-[10px] p-3 text-sm font-medium text-[#344E41] outline-2 -outline-offset-2 outline-[#DAD7CD] placeholder:text-[#999999] focus:outline-[#3A5A40]"
          />
        </div>

        {state?.error ? (
          <div className="mt-4 rounded-[10px] bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 outline-2 -outline-offset-2 outline-red-200">
            {state.error}
          </div>
        ) : null}

        <div className="mt-3 flex justify-end">
          <span className="cursor-pointer text-sm font-semibold text-[#3A5A40]">
            Lupa Password?
          </span>
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="mt-6 w-full cursor-pointer rounded-[20px] bg-[#3A5A40] py-4 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? "Memproses..." : "Masuk"}
        </button>
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#DAD7CD]"></div>
          <span className="text-xs font-semibold text-[#666666]">atau</span>
          <div className="h-px flex-1 bg-[#DAD7CD]"></div>
        </div>
        <Link
          href="/register"
          className="block w-full rounded-[20px] py-4 text-center text-sm font-bold text-[#3A5A40] outline-2 -outline-offset-2 outline-[#3A5A40] transition hover:bg-[#3A5A40] hover:text-white"
        >
          Daftar
        </Link>
      </form>
    </div>
  );
}
