import type { SvgProps } from "../../ui/icon/types";

export function Search({ width, height, fill, ...props }: SvgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Search"
      {...props}
    >
      <title>Search</title>
      <g clipPath="url(#clip0_3001_5)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.33333 6.66667C1.33333 3.72115 3.72115 1.33333 6.66667 1.33333C9.6122 1.33333 12 3.72115 12 6.66667C12 9.6122 9.6122 12 6.66667 12C3.72115 12 1.33333 9.6122 1.33333 6.66667ZM6.66667 0C2.98477 0 0 2.98477 0 6.66667C0 10.3485 2.98477 13.3333 6.66667 13.3333C8.26753 13.3333 9.7366 12.7691 10.8858 11.8286L14.8619 15.8047C15.1223 16.0651 15.5444 16.0651 15.8047 15.8047C16.0651 15.5444 16.0651 15.1223 15.8047 14.8619L11.8286 10.8858C12.7691 9.7366 13.3333 8.26753 13.3333 6.66667C13.3333 2.98477 10.3485 0 6.66667 0Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_3001_5">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
