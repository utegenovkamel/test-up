import * as Icons from "../../assets/icons";
import { colors } from "./constants";
import type { IconProps } from "./types";

export const Icon = ({
  className,
  color = "grey",
  customColor,
  size = 16,
  variant,
  style,
  onClick,
  currentColor,
}: IconProps) => {
  const Component = Icons[variant];

  return (
    <Component
      fill={currentColor ? undefined : customColor || colors[color]}
      width={typeof size === "number" ? size : size[0]}
      height={typeof size === "number" ? size : size[1]}
      className={
        `icon icon_${variant.toLowerCase()}` +
        (className ? ` ${className}` : "")
      }
      onClick={onClick}
      style={style}
    />
  );
};
