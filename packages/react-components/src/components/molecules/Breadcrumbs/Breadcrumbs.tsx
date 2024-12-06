import React from 'react';
import mnt from 'react-mnt';

export interface BreadcrumbsProps {
  /**
   * Optional separator to use between breadcrumbs
   */
  separator?: string;
}

const StyledBreadcrumbs = mnt('nav')<BreadcrumbsProps>`
  mnt-breadcrumbs
`;

export type MntBreadcrumbsProps = React.ComponentPropsWithRef<typeof StyledBreadcrumbs>;

/**
 * Breadcrums component for displaying breadcrumb navigation.
 */
export const MntBreadcrumbs = ({ children, separator = '/', ...props }: MntBreadcrumbsProps) => {
  const liChildren = React.Children.map(children, child => (
    <li data-separator={separator}>{child}</li>
  ));

  return (
    <StyledBreadcrumbs {...props}>
      <ol>{liChildren}</ol>
    </StyledBreadcrumbs>
  );
};
