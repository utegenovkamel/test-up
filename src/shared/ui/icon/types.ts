import type { CSSProperties } from "react";
import type * as Icons from "../../assets/icons";
import type { colors } from "./constants";

export type IconsNamesType = keyof typeof Icons;

export type SvgColorsType = keyof typeof colors;

export interface SvgProps {
  fill?: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

export interface IconProps extends Omit<SvgProps, "width" | "height" | "fill"> {
  variant: IconsNamesType;
  color?: SvgColorsType;
  customColor?: string;
  size?: number | [number, number];
  currentColor?: boolean;
}
