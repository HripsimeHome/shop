import type { ReactNode } from "react";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "small";

type TypographyProps = {
  variant?: TypographyVariant;
  children: ReactNode;
  className?: string;
};

const variantStyles: Record<TypographyVariant, string> = {
  h1: "font-heading text-3xl font-bold tracking-heading md:text-5xl",

  h2: "font-heading text-2xl font-bold tracking-heading md:text-3xl",

  h3: "font-heading text-xl font-semibold",

  body: "font-body text-base leading-7",

  small: "font-body text-sm leading-6 text-text-muted",
};

export default function Typography({
  variant = "body",
  children,
  className = "",
}: TypographyProps) {
  const Tag = (
    variant === "body" || variant === "small"
      ? "p"
      : variant
  ) as "h1" | "h2" | "h3" | "p";

  return (
    <Tag
      className={`${variantStyles[variant]} ${className}`}
    >
      {children}
    </Tag>
  );
}