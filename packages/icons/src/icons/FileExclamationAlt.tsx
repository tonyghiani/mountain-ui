import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileExclamationAlt = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M9 10h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2Zm6 2H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm0 4H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm4.71 4.29a1.58 1.58 0 0 0-.15-.12.76.76 0 0 0-.18-.09L19.2 20a1 1 0 0 0-.58.06.9.9 0 0 0-.54.54.84.84 0 0 0-.08.4 1 1 0 1 0 1.92-.38 1.15 1.15 0 0 0-.21-.33ZM20 8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19.32.32 0 0 0-.09 0 .88.88 0 0 0-.33-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a1 1 0 0 0 0-2H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v2a1 1 0 0 0 2 0V8.94ZM15 8a1 1 0 0 1-1-1V5.41L16.59 8Zm4 7a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Z' />
  </svg>
);
export default SvgFileExclamationAlt;
