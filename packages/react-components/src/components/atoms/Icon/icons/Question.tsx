import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQuestion = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M15.333 9.5A3.5 3.5 0 0 0 8.8 7.75a1 1 0 0 0 1.733 1A1.503 1.503 0 0 1 11.833 8a1.5 1.5 0 1 1 0 3h-.003a.95.95 0 0 0-.19.039 1.032 1.032 0 0 0-.198.04.983.983 0 0 0-.155.105 1.008 1.008 0 0 0-.162.11 1.005 1.005 0 0 0-.117.174.978.978 0 0 0-.097.144 1.023 1.023 0 0 0-.043.212.948.948 0 0 0-.035.176v1l.002.011v.491a1 1 0 0 0 1 .998h.003a1 1 0 0 0 .998-1.002l-.002-.662A3.494 3.494 0 0 0 15.333 9.5Zm-4.203 6.79a1 1 0 0 0 .7 1.71 1.036 1.036 0 0 0 .71-.29 1.015 1.015 0 0 0 0-1.42 1.034 1.034 0 0 0-1.41 0Z' />
  </svg>
);
export default SvgQuestion;
