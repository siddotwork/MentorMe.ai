import "./GeneralButton.scss";
import type { ButtonProps } from "./types";

export const SkillChip = ({ label, logo }: ButtonProps) => {
  return (
    <button
      type="button"
      className="
        inline-flex items-center gap-2
        rounded-full
        border border-white/10
        bg-slate-900
        px-4 py-2
        text-sm font-medium text-slate-200
        transition
        hover:bg-slate-800 hover:border-white/20
        cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-indigo-500/40
      "
    >
      <img
        src={logo}
        alt={label}
        className="h-4 w-4 object-contain"
        loading="lazy"
      />
      <span>{label}</span>
    </button>
  );
};
