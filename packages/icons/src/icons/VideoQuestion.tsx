import type { SVGProps } from 'react';
import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideoQuestion = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M10.21 17.29a1.047 1.047 0 0 0-1.42 0 1.027 1.027 0 0 0-.21.33.942.942 0 0 0 0 .76 1.154 1.154 0 0 0 .21.33A1 1 0 0 0 10.5 18a1 1 0 0 0-.08-.38 1.151 1.151 0 0 0-.21-.33ZM9.5 9a3.01 3.01 0 0 0-2.598 1.5 1 1 0 1 0 1.73 1A1 1 0 1 1 9.5 13a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.184A2.993 2.993 0 0 0 9.5 9Zm12.025-2.85a.999.999 0 0 0-.972-.045l-3.564 1.782A2.998 2.998 0 0 0 14 5H5a3.003 3.003 0 0 0-3 3v6a3.003 3.003 0 0 0 3 3h1a1 1 0 0 0 0-2H5a1.001 1.001 0 0 1-1-1V8a1.001 1.001 0 0 1 1-1h9a1.001 1.001 0 0 1 1 1v6a1.001 1.001 0 0 1-1 1h-.5a1 1 0 0 0 0 2h.5a2.998 2.998 0 0 0 2.989-2.888l3.564 1.782A1 1 0 0 0 22 15V7a1 1 0 0 0-.475-.85ZM20 13.381l-3-1.5v-1.764l3-1.5Z' />
  </svg>
);
export default SvgVideoQuestion;
