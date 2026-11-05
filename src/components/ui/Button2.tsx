import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button2({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        rounded-button
        bg-primary
        px-4 py-2
        text-sm font-semibold
        text-white
        transition-colors duration-200
        hover:bg-primary-hover
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-brand-500
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    >
      {children}
    </button>
  );
}