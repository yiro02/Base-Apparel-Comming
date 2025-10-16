import { type SVGProps } from "react";

export const IconArrow = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox=" 20 0 -50 750"
      width="500"
      height="102"
    >
      <path
        fill="none"
        stroke="#fff"
        stroke-width="2.5"
        d="M3 3l9.836 11.836L1 23.712"
      />
    </svg>
  );
};
export default IconArrow;
