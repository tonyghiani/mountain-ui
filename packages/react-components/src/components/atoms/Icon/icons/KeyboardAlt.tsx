import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKeyboardAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M6.71 9.29a1 1 0 0 0-1.42 0 1 1 0 0 0-.21.33 1 1 0 0 0 .21 1.09 1.15 1.15 0 0 0 .33.21A.84.84 0 0 0 6 11a1 1 0 0 0 .92-1.38 1 1 0 0 0-.21-.33ZM10 11a1 1 0 0 0 .92-1.38 1 1 0 0 0-.21-.33 1 1 0 0 0-.9-.29.6.6 0 0 0-.19.06l-.18.09-.15.12A1.05 1.05 0 0 0 9 10a1 1 0 0 0 1 1Zm-3.62 2.08a1 1 0 0 0-.76 0A1 1 0 0 0 5 14a1 1 0 0 0 1.38.92 1.15 1.15 0 0 0 .33-.21A1 1 0 0 0 7 14a1 1 0 0 0-.29-.71.93.93 0 0 0-.33-.21ZM14 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm.71-3.71a1 1 0 0 0-1.42 0 1 1 0 0 0-.21.33A1 1 0 1 0 15 10a.84.84 0 0 0-.08-.38 1 1 0 0 0-.21-.33Zm3.85 3.88a.76.76 0 0 0-.18-.09 1 1 0 0 0-.76 0 1.15 1.15 0 0 0-.33.21A1.05 1.05 0 0 0 17 14a1 1 0 1 0 2 0 1.05 1.05 0 0 0-.29-.71ZM20 5H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm1 11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Zm-2.29-6.71A1 1 0 0 0 17 10a1 1 0 1 0 1.92-.38 1 1 0 0 0-.21-.33Z' />
  </svg>
);
export default SvgKeyboardAlt;
