import React from 'react';
import { Range } from 'react-range';
import { IProps, ITrackProps } from 'react-range/lib/types';
import css from '@styled-system/css';

import { useTheme } from '../../../hooks';
import { Box } from '../../atoms';
import { BaseElementProps } from '../../BaseElement';

export type RangeInputProps = IProps &
  BaseElementProps & {
    /* Props for the track element */
    trackProps?: ITrackProps & BaseElementProps;
    /* RangeInput children */
    children: React.ReactNode;
  };

export type ThumbProps = BaseElementProps;

/**
 * The `RangeInput` component provide a custom range input element
 */
const RangeInput = ({ children, trackProps, ...inputProps }: RangeInputProps) => {
  const theme = useTheme();
  return (
    <Range
      renderTrack={({ props, children: trackChildren }) => (
        <Box
          {...props}
          width={1}
          height={4}
          borderRadius={6}
          backgroundImage={theme.colors.gradient.primary}
          {...trackProps}
        >
          {trackChildren}
        </Box>
      )}
      renderThumb={({ props, value }) => {
        return (
          <div {...props} style={{ ...props.style, outline: 'none' }}>
            {typeof children === 'function' ? children(value) : children}
          </div>
        );
      }}
      {...inputProps}
    />
  );
};

RangeInput.displayName = 'RangeInput';
RangeInput.defaultProps = {
  values: [],
  onChange: null,
  onFinalChange: null,
  renderMark: null,
  allowOverlap: true
};

export default RangeInput;

const thumbPseudoSelectors = css({
  transition: 'all .1s ease-in-out',
  '&:hover': {
    boxShadow: '0px 0px 0px 6px rgba(175, 223, 230, 0.15)'
  },
  '&:active': {
    transform: 'scale(1.2)'
  }
});

RangeInput.Thumb = function Thumb(props: ThumbProps) {
  return (
    <Box
      width={12}
      height={12}
      borderRadius={7}
      backgroundColor='primary.main'
      css={thumbPseudoSelectors}
      {...props}
    />
  );
};
