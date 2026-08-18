"use client";

import type { ReactNode, MouseEventHandler } from "react";
import SpecularButton from "./SpecularButton";

/**
 * Site-wide CTA. Wraps SpecularButton with the KKJSTU palette so pages only
 * pick a variant instead of repeating the shader props at every call site.
 *
 * - `gold`  — primary action on dark sections (matches the old #d9a82e fill)
 * - `light` — primary action on dark sections where the old button was white
 * - `dark`  — primary action on light sections
 * - `ghost` — secondary/outline action on dark sections
 */
export type CtaVariant = "gold" | "light" | "dark" | "ghost";

const VARIANTS: Record<
  CtaVariant,
  {
    tint: string;
    tintOpacity: number;
    textColor: string;
    lineColor: string;
    baseColor: string;
  }
> = {
  gold: {
    tint: "#d9a82e",
    tintOpacity: 1,
    textColor: "#232771",
    lineColor: "#ffe9a8",
    baseColor: "#8a6a12",
  },
  light: {
    tint: "#ffffff",
    tintOpacity: 1,
    textColor: "#10233f",
    lineColor: "#ffffff",
    baseColor: "#9aa8bb",
  },
  dark: {
    tint: "#232771",
    tintOpacity: 1,
    textColor: "#ffffff",
    lineColor: "#a9b0ff",
    baseColor: "#151a5a",
  },
  ghost: {
    tint: "#ffffff",
    tintOpacity: 0.05,
    textColor: "#ffffff",
    lineColor: "#ffffff",
    baseColor: "#525252",
  },
};

export interface CtaButtonProps {
  children: ReactNode;
  variant?: CtaVariant;
  size?: "sm" | "md" | "lg";
  radius?: number;
  href?: string;
  target?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
}

export function CtaButton({
  children,
  variant = "gold",
  size = "md",
  radius = 999,
  href,
  target,
  onClick,
  type,
  disabled,
  className,
  "aria-label": ariaLabel,
}: CtaButtonProps) {
  const palette = VARIANTS[variant];

  return (
    <SpecularButton
      size={size}
      radius={radius}
      tint={palette.tint}
      tintOpacity={palette.tintOpacity}
      blur={0}
      textColor={palette.textColor}
      lineColor={palette.lineColor}
      baseColor={palette.baseColor}
      intensity={1}
      shineSize={10}
      shineFade={40}
      thickness={1}
      speed={0.35}
      followMouse
      proximity={250}
      autoAnimate={false}
      href={href}
      target={target}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </SpecularButton>
  );
}

export default CtaButton;
