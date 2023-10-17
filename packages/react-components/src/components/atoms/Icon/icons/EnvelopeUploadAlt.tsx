import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEnvelopeUploadAlt = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M16 11.08H8a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3Zm-.42 2L12.7 16a1 1 0 0 1-1.4 0l-2.88-2.92Zm1.42 6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4.59l2.88 2.88a3 3 0 0 0 4.24 0L17 14.49ZM10.71 5.62l.29-.29v2.75a1 1 0 0 0 2 0V5.33l.29.29a1 1 0 1 0 1.42-1.41l-2-2a1 1 0 0 0-1.42 0l-2 2a1 1 0 0 0 0 1.41 1 1 0 0 0 1.42 0Z' />
  </svg>
);
export default SvgEnvelopeUploadAlt;
