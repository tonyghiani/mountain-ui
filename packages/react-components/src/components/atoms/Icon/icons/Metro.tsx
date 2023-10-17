import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMetro = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M8.71 14.29a1.002 1.002 0 0 0-1.09-.21.9.9 0 0 0-.54.54 1 1 0 1 0 1.84 0 1.147 1.147 0 0 0-.21-.33Zm8 0a1.047 1.047 0 0 0-1.42 0 1.147 1.147 0 0 0-.21.33.99.99 0 0 0 .21 1.09 1.147 1.147 0 0 0 .33.21.941.941 0 0 0 .76 0 1.16 1.16 0 0 0 .33-.21.99.99 0 0 0 .21-1.09 1.147 1.147 0 0 0-.21-.33Zm2.6 4.605a4.97 4.97 0 0 0 1.784-4.817l-1.5-8A5 5 0 0 0 14.68 2H9.319a5 5 0 0 0-4.913 4.078l-1.5 8a4.97 4.97 0 0 0 1.785 4.817l-1.398 1.398a1 1 0 1 0 1.414 1.414l1.87-1.87A5.006 5.006 0 0 0 7.818 20h8.362a5.006 5.006 0 0 0 1.243-.162l1.869 1.869a1 1 0 0 0 1.414-1.414ZM6.37 6.447A3.002 3.002 0 0 1 9.32 4h5.362a3.002 3.002 0 0 1 2.948 2.447l.347 1.85a7.955 7.955 0 0 1-11.952 0Zm12.117 10.469A2.99 2.99 0 0 1 16.181 18H7.819a3 3 0 0 1-2.948-3.553l.711-3.792a9.954 9.954 0 0 0 12.836 0l.71 3.792a2.99 2.99 0 0 1-.64 2.469Z' />
  </svg>
);
export default SvgMetro;
