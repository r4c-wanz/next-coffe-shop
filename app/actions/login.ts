"use server";

import fs from "fs/promises";
import { redirect } from "next/navigation";
import path from "path";

export type LoginState = {
  error?: string;
};

type StoredUser = {
  email: string;
  password: string;
};

export async function loginAction(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Email dan password wajib diisi" };
  }

  const filePath = path.join(process.cwd(), "data", "user.json");
  const fileContent = await fs.readFile(filePath, "utf-8");
  const users: StoredUser[] = JSON.parse(fileContent);

  const user = users.find((item) => item.email === email);

  if (!user) {
    return { error: "User tidak ditemukan" };
  }

  if (user.password !== password) {
    return { error: "Password salah" };
  }

  redirect("/");
}
