import type { SvgProps } from "../../ui/icon/types";

export const ArrowLeft = ({
  width = 6,
  height = 9,
  fill,
  ...props
}: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 6 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Arrow Left"
    {...props}
  >
    <title>Arrow Left</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.69185 8.60114C4.02379 8.93308 4.56198 8.93308 4.89393 8.60114C5.22587 8.26919 5.22587 7.731 4.89393 7.39905L1.99497 4.5001L4.89393 1.60114C5.22587 1.26919 5.22587 0.731003 4.89393 0.399023C4.56198 0.0671234 4.02379 0.0671234 3.69184 0.399023L0.545398 3.5455C0.0181887 4.07271 0.0181886 4.92748 0.545398 5.45469L3.69185 8.60114Z"
      fill={fill}
    />
  </svg>
);
