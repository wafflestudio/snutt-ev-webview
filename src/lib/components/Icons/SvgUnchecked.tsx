import * as React from "react";
import { SVGProps } from "react";

const SvgUnchecked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={15} cy={15} r={14} fill="#F2F2F2" />
    <mask
      id="unchecked_svg__a"
      maskUnits="userSpaceOnUse"
      x={6.48}
      y={4.98}
      width={17.678}
      height={17.678}
      fill="#000"
    >
      <path fill="#fff" d="M6.48 4.98h17.678v17.678H6.48z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.248 15.233a.5.5 0 0 0 0 .707l4.463 4.463.006.007a.5.5 0 0 0 .708 0l8.485-8.485a.5.5 0 1 0-.707-.708L13.07 19.35l-4.116-4.116a.5.5 0 0 0-.707 0Z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.248 15.233a.5.5 0 0 0 0 .707l4.463 4.463.006.007a.5.5 0 0 0 .708 0l8.485-8.485a.5.5 0 1 0-.707-.708L13.07 19.35l-4.116-4.116a.5.5 0 0 0-.707 0Z"
      fill="#fff"
    />
    <path
      d="m12.711 20.403.72-.694-.006-.006-.007-.007-.707.707Zm.006.007-.707.707.707-.707Zm.354-1.06-.707.706.707.707.707-.707-.707-.707Zm-4.116-4.117a.5.5 0 0 1 0 .707L7.54 14.526a1.5 1.5 0 0 0 0 2.12l1.415-1.413Zm4.463 4.463-4.463-4.463-1.415 1.414 4.464 4.463 1.414-1.414Zm.007.007a.354.354 0 0 1 .006.006l-1.44 1.389.02.019 1.414-1.414Zm-.708 0a.5.5 0 0 1 .708 0l-1.415 1.414a1.5 1.5 0 0 0 2.122 0l-1.415-1.414Zm8.486-8.486-8.486 8.486 1.415 1.414 8.485-8.485-1.414-1.415Zm0 .708a.5.5 0 0 1 0-.708l1.414 1.415a1.5 1.5 0 0 0 0-2.122l-1.414 1.415Zm.707 0a.5.5 0 0 1-.707 0l1.414-1.415a1.5 1.5 0 0 0-2.121 0l1.414 1.415Zm-8.132 8.131 8.132-8.131-1.414-1.415-8.132 8.132 1.414 1.414Zm-5.53-4.116 4.116 4.116 1.414-1.414-4.116-4.116-1.414 1.414Zm.707 0a.5.5 0 0 1-.707 0l1.414-1.414a1.5 1.5 0 0 0-2.122 0l1.415 1.414Z"
      fill="#fff"
      mask="url(#unchecked_svg__a)"
    />
  </svg>
);

export default SvgUnchecked;
