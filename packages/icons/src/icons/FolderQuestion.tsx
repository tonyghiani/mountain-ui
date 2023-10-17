import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderQuestion = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M12.57 16.3a.64.64 0 0 0-.15-.13l-.17-.09-.19-.08a1 1 0 0 0-.9.28 1 1 0 0 0-.22.32 1 1 0 0 0-.07.39 1 1 0 0 0 .29.7 1 1 0 0 0 .32.22 1 1 0 0 0 .39.07 1 1 0 0 0 .38-.07 1 1 0 0 0 .32-.22 1 1 0 0 0 .3-.7 1 1 0 0 0-.08-.39.87.87 0 0 0-.22-.3Zm-.7-7.3a3 3 0 0 0-2.6 1.5 1 1 0 1 0 1.73 1 1 1 0 0 1 1.87.5 1 1 0 0 1-1 1 1 1 0 1 0 0 2 3 3 0 0 0 0-6ZM19 5.5h-6.28l-.32-1a3 3 0 0 0-2.84-2H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h4.56a1 1 0 0 1 .95.68l.54 1.64a1 1 0 0 0 .95.68h7a1 1 0 0 1 1 1Z' />
  </svg>
);
export default SvgFolderQuestion;
