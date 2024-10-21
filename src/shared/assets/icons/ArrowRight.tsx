import type { SvgProps } from "../../ui/icon/types";

export const ArrowRight = ({
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
    aria-label="Arrow Right"
    {...props}
  >
    <title>Arrow Right</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.60103 8.60114C1.26909 8.93308 0.730899 8.93308 0.398949 8.60114C0.0670089 8.26919 0.0670088 7.731 0.398949 7.39905L3.29791 4.5001L0.398949 1.60114C0.0670086 1.26919 0.0670085 0.731003 0.398949 0.399023C0.730899 0.0671234 1.26909 0.0671234 1.60104 0.399023L4.74748 3.5455C5.27469 4.07271 5.27469 4.92748 4.74748 5.45469L1.60103 8.60114Z"
      fill={fill}
    />
  </svg>
);
