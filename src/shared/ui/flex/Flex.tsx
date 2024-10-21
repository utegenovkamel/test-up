// Flex.tsx
import type React from "react";

type FlexProps = {
  children: React.ReactNode;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  m?: number;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
  className?: string;
  gap?: number;
};
export function Flex({
  children,
  direction = "row",
  justifyContent = "flex-start",
  alignItems = "stretch",
  wrap = "nowrap",
  m,
  mr,
  ml,
  mt,
  mb,
  className = "",
  gap,
}: FlexProps) {
  const flexStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: direction,
    justifyContent,
    alignItems,
    flexWrap: wrap,
    margin: m !== undefined ? `${m}px` : undefined,
    marginRight: mr !== undefined ? `${mr}px` : undefined,
    marginLeft: ml !== undefined ? `${ml}px` : undefined,
    marginTop: mt !== undefined ? `${mt}px` : undefined,
    marginBottom: mb !== undefined ? `${mb}px` : undefined,
    gap: gap !== undefined ? `${gap}px` : undefined,
  };

  return (
    <div className={`${className}`} style={flexStyles}>
      {children}
    </div>
  );
}
