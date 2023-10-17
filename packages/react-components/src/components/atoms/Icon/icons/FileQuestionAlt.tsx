import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileQuestionAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='1em'
    height='1em'
    data-name=''
    fill='currentColor'
    preserveAspectRatio='xMidYMid meet'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M13.07 12h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Zm1 8h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v1a1 1 0 0 0 2 0V9a.14.14 0 0 0 0-.06.86.86 0 0 0-.07-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1 1 0 0 0-.29-.19s-.05 0-.08 0a.88.88 0 0 0-.32-.11h-6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a1 1 0 0 0 0-2Zm-1-14.59L15.65 8h-1.58a1 1 0 0 1-1-1Zm5.57 14.88a1.58 1.58 0 0 0-.15-.12 1.08 1.08 0 0 0-.36-.15 1 1 0 0 0-.9.27 1 1 0 0 0 0 1.42 1 1 0 0 0 .7.29 1 1 0 0 0 .93-1.38 1.19 1.19 0 0 0-.22-.33ZM13.07 16h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Zm4.86-3a3 3 0 0 0-2.6 1.5 1 1 0 1 0 1.74 1 1 1 0 1 1 .86 1.5 1 1 0 0 0 0 2 3 3 0 0 0 0-6Zm-9.86-3h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2Z' />
  </svg>
);
export default SvgFileQuestionAlt;
