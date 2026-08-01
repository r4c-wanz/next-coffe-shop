"use client";

import Link from "next/link";
import { useActionState } from "react";
import { loginAction, type LoginState } from "@/app/actions/login";
import LogoWithText from "../ui/LogoWithText";
import IconInput from "./IconInput";
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
        <LogoWithText className="h-7 w-20" />
      </div>
      <h2 className="text-center font-mono text-2xl font-semibold text-[#3A5A40]">
        Selamat Datang Kembali
      </h2>
      <p className="mt-2 text-center text-sm font-medium text-[#666666]">
        Masuk untuk melanjutkan ke akunmu
      </p>
      <form action={formAction} className="mt-8">
        <IconInput
          label="Email"
          name="email"
          id="email"
          type="email"
          icon={MailIcon}
          placeholder="Masukkan Email"
        />
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
