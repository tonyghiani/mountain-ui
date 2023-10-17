import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileGraph = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d='M9 10h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2Zm5.21 2.386-1.673 2.152-.868-.781a1 1 0 0 0-1.45.118l-2 2.5a1 1 0 1 0 1.562 1.25l1.338-1.673.879.791a1 1 0 0 0 1.458-.13l2.334-3a1 1 0 0 0-1.58-1.227Zm5.778-3.448a1.009 1.009 0 0 0-.28-.643l-.001-.002-6-6-.001-.001a.99.99 0 0 0-.287-.193c-.03-.014-.06-.022-.092-.033a.983.983 0 0 0-.267-.054C13.04 2.011 13.021 2 13 2H7a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h10a3.003 3.003 0 0 0 3-3V9c0-.022-.011-.04-.012-.062ZM14 5.414 16.586 8H15a1.001 1.001 0 0 1-1-1ZM18 19a1.001 1.001 0 0 1-1 1H7a1.001 1.001 0 0 1-1-1V5a1.001 1.001 0 0 1 1-1h5v3a3.003 3.003 0 0 0 3 3h3Z' />
  </svg>
);
export default SvgFileGraph;
