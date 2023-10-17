import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBalanceScale = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    data-name=''
    viewBox='0 0 24 24'
    width='1em'
    height='1em'
    fill='currentColor'
    preserveAspectRatio='xMidYMid meet'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M22.964 13.823a.948.948 0 0 0-.028-.175l-2.305-6.137A2.996 2.996 0 0 0 22 5a1 1 0 0 0-2 0 1 1 0 0 1-1.882.473A2.893 2.893 0 0 0 15.54 4H13V3a1 1 0 0 0-2 0v1H8.46a2.893 2.893 0 0 0-2.578 1.473A1 1 0 0 1 4 5a1 1 0 0 0-2 0 2.996 2.996 0 0 0 1.369 2.511l-2.305 6.137a.948.948 0 0 0-.028.175A.949.949 0 0 0 1 14c0 .01.003.018.003.027 0 .013.003.025.004.039a3.994 3.994 0 0 0 7.986 0c.001-.014.004-.026.004-.039 0-.01.003-.018.003-.027a.949.949 0 0 0-.036-.177.948.948 0 0 0-.028-.175L6.629 7.504A2.99 2.99 0 0 0 7.643 6.42.917.917 0 0 1 8.46 6H11v14H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3V6h2.54a.917.917 0 0 1 .817.42 2.99 2.99 0 0 0 1.014 1.084l-2.307 6.144a.948.948 0 0 0-.028.175A.949.949 0 0 0 15 14c0 .01.003.018.003.027 0 .013.003.025.004.039a3.994 3.994 0 0 0 7.986 0c.001-.014.004-.026.004-.039 0-.01.003-.018.003-.027a.949.949 0 0 0-.036-.177ZM5 8.856 6.556 13H3.444ZM6.723 15A2.023 2.023 0 0 1 5 16a2 2 0 0 1-1.731-1ZM19 8.856 20.556 13h-3.112ZM19 16a2 2 0 0 1-1.731-1h3.454A2.023 2.023 0 0 1 19 16Z' />
  </svg>
);
export default SvgBalanceScale;
