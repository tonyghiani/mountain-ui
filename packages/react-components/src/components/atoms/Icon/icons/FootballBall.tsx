import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFootballBall = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M21.84 5.56a4.08 4.08 0 0 0-1.14-2.25 4.08 4.08 0 0 0-2.25-1.14A14.45 14.45 0 0 0 2.16 18.44a4.08 4.08 0 0 0 1.14 2.25 4.08 4.08 0 0 0 2.25 1.14 13.12 13.12 0 0 0 2.08.17 14.37 14.37 0 0 0 10.11-4.26 14.23 14.23 0 0 0 4.1-12.18ZM4.21 18.37a1.68 1.68 0 0 1-.07-.24A12.21 12.21 0 0 1 7.67 7.67 12.39 12.39 0 0 1 16.37 4a10.44 10.44 0 0 1 1.76.14 1.68 1.68 0 0 1 .24.07l-4.93 4.94-.73-.73a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l.73.73L10.56 12l-.73-.73a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42l.73.73Zm12.12-2a12.24 12.24 0 0 1-10.46 3.49 1.68 1.68 0 0 1-.24-.07l4.93-4.94.73.73a1 1 0 1 0 1.42-1.41l-.71-.73L13.44 12l.73.73a1 1 0 0 0 .71.29 1 1 0 0 0 .7-1.71l-.73-.73 4.94-4.93a1.68 1.68 0 0 1 .07.24 12.21 12.21 0 0 1-3.53 10.44Z' />
  </svg>
);
export default SvgFootballBall;
