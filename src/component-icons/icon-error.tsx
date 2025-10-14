import { type SVGProps } from 'react';

export const IconError = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} width="24" height="24" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 10 24 24" fill="#13eb86ff" aria-hidden="true">
            <circle cx="12" cy="12" r="12" fill="#F96464" />
            <rect x="11" y="6" width="2" height="8" rx="1" fill="white" />
            <rect x="11" y="16" width="2" height="2" rx="1" fill="white" />
            <path fill="none" stroke="#f01515ff" stroke-width="2.5"
             d="M3 3l9.836 11.836L1 23.712"/>
        </svg>
    );
}
export default IconError;