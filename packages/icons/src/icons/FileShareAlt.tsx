import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileShareAlt = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M13.5 12.5a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1Zm5 5a2 2 0 0 0-1.18.39l-1.75-.8 1.91-.88a2 2 0 0 0 1 .29 2 2 0 1 0-2-2l-1.89.87A2 2 0 1 0 13.5 19a1.88 1.88 0 0 0 .92-.24l2.1 1a2 2 0 1 0 2-2.23Zm-8 2h-5a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3a1 1 0 0 0 2 0V8.44a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19.29.29 0 0 0-.1 0 1.1 1.1 0 0 0-.26-.06H5.5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2Zm2-14.59 2.59 2.59H13.5a1 1 0 0 1-1-1Zm-5 10.59a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm0-6h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2Z' />
  </svg>
);
export default SvgFileShareAlt;
