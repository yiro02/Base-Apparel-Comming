import { type SVGProps } from "react";
export const LogoIcon = (props: SVGProps<SVGSVGElement>) => {
    return ( 
    <svg  {...props}
        xmlns="http://www.w3.org/2000/svg"
        width={props.width ?? 1300}
        height={props.height ?? 220}
        viewBox="80 60 100 200"   
        fill="none"  >
        <g>
            <path
              
                d="M10 0 L20 20 H0 Z"
                fill="#FF7A7A"

            />
            <text
                x="250"
                y="150"
                fontFamily="Montserrat, Arial, sans-serif"
                fontSize="12"
                fill="#232323"
            >
                BASE APPAREL
            </text>
        </g>
    </svg>
    );
}

    export default LogoIcon;