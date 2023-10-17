import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgProgrammingLanguage = ({
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
    <path d='m22 3-3 15.1-9.1 3-7.9-3 .8-4.1h3.4l-.4 1.7 4.8 1.8 5.5-1.8.8-3.8H3.2l.7-3.4h13.6l.5-2.1H4.3L5 3h17z' />
  </svg>
);
export default SvgProgrammingLanguage;
