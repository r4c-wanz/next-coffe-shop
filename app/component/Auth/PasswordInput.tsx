"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon, LockKeyholeIcon } from "lucide-react";

export default function PasswordInput({
  label,
  name,
  id,
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  id: string;
  placeholder: string;
  required?: boolean;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-[#344E41]">
        {label} {required && <span className="text-[#E68B24]">*</span>}
      </label>
      <label className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          id={id}
          placeholder={placeholder}
          className="mt-2 w-full rounded-lg p-3 pr-16 text-sm font-medium text-[#344E41] outline-2 -outline-offset-2 outline-[#DAD7CD] placeholder:text-[#999999] focus:outline-[#3A5A40]"
        />
        <div className="absolute top-1/2 right-4 flex -translate-y-1/2 items-center gap-3">
          <LockKeyholeIcon className="text-[#666666]" strokeWidth={1.5} />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="cursor-pointer text-[#666666]"
            aria-label={
              showPassword ? "Sembunyikan password" : "Tampilkan password"
            }
          >
            {showPassword ? (
              <EyeOffIcon strokeWidth={1.5} />
            ) : (
              <EyeIcon strokeWidth={1.5} />
            )}
          </button>
        </div>
      </label>
    </div>
  );
}
