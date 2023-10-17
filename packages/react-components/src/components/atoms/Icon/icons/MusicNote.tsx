import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMusicNote = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M19.12 2.21a1 1 0 0 0-.86-.21l-8 2a1 1 0 0 0-.76 1v10.35A3.45 3.45 0 0 0 8 15a3.5 3.5 0 1 0 3.5 3.5v-7.72L18.74 9h.07l.19-.15.15-.1a.93.93 0 0 0 .13-.15.78.78 0 0 0 .1-.15.55.55 0 0 0 .06-.18.58.58 0 0 0 0-.19.24.24 0 0 0 0-.08V3a1 1 0 0 0-.32-.79ZM8 20a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 8 20Zm9.5-12.78-6 1.5V5.78l6-1.5Z' />
  </svg>
);
export default SvgMusicNote;
