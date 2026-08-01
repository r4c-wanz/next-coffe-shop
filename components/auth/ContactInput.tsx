"use client";

import { useState } from "react";
import { MailIcon, PhoneIcon } from "lucide-react";

// Sederhana: kalau isinya cuma angka/simbol telepon, anggap No. Handphone.
const PHONE_ONLY_PATTERN = /^[0-9+()\s-]+$/;

// Validasi native: email valid ATAU No. HP yang diawali 0, 10-14 digit.
const CONTACT_PATTERN =
  "^([\\w.+-]+@[\\w-]+\\.[a-zA-Z]{2,})$|^(0[0-9]{9,13})$";

type ContactInputProps = {
  label?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
};

/**
 * Input gabungan untuk Email & No. Handphone (satu field, satu name).
 * Icon otomatis berganti antara Mail/Phone sesuai pola input yang diketik user.
 */
export default function ContactInput({
  label = "Email / No. Handphone",
  name = "contact",
  id = "contact",
  placeholder = "Masukkan Email atau No. Handphone",
  required = true,
}: ContactInputProps) {
  const [value, setValue] = useState("");
  const isPhone = value.length > 0 && PHONE_ONLY_PATTERN.test(value);
  const Icon = isPhone ? PhoneIcon : MailIcon;

  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-[#344E41]">
        {label} {required && <span className="text-[#E68B24]">*</span>}
      </label>
      <label className="relative">
        <input
          type="text"
          inputMode={isPhone ? "tel" : "email"}
          name={name}
          id={id}
          required={required}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={placeholder}
          pattern={CONTACT_PATTERN}
          title="Masukkan email yang valid, atau No. Handphone diawali 0 (10-14 digit)"
          className="mt-2 w-full rounded-lg p-3 text-sm font-medium text-[#344E41] outline-2 -outline-offset-2 outline-[#DAD7CD] placeholder:text-[#999999] focus:outline-[#3A5A40]"
        />
        <Icon
          className="absolute top-1/2 right-4 -translate-y-1/2 text-[#666666] transition-colors"
          strokeWidth={1.5}
        />
      </label>
    </div>
  );
}
