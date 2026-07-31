import { type LucideIcon } from "lucide-react";
import { type InputHTMLAttributes } from "react";

type IconInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  icon: LucideIcon;
  required?: boolean;
};

/**
 * Shared text input for auth forms (Nama, Email, dsb).
 * Menyatukan markup input + icon yang tadinya diduplikasi
 * di FormLogin & FormRegister menjadi satu komponen.
 */
export default function IconInput({
  label,
  id,
  icon: Icon,
  required = true,
  ...inputProps
}: IconInputProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-[#344E41]">
        {label} {required && <span className="text-[#E68B24]">*</span>}
      </label>
      <label className="relative">
        <input
          id={id}
          required={required}
          className="mt-2 w-full rounded-lg p-3 text-sm font-medium text-[#344E41] outline-2 -outline-offset-2 outline-[#DAD7CD] placeholder:text-[#999999] focus:outline-[#3A5A40]"
          {...inputProps}
        />
        <Icon
          className="absolute top-1/2 right-4 -translate-y-1/2 text-[#666666]"
          strokeWidth={1.5}
        />
      </label>
    </div>
  );
}
