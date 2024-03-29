import React from 'react';
import mnt from 'react-mnt';
import { Range } from 'react-range';
import { IProps, ITrackProps } from 'react-range/lib/types';

export interface MntRangeInputProps extends Omit<IProps, 'renderTrack' | 'renderThumb'> {
  /**
   * Props for the track element
   */
  trackProps?: ITrackProps;
  /**
   * MntRangeInput children
   */
  children: React.ReactNode | ((_value: number) => React.ReactNode);
}

export const MntRangeTrack = mnt('div') <ITrackProps>`
  mnt-range-input-track
`;

/**
 * The `MntRangeInput` component provide a custom range input element.
 */
export const MntRangeInput = ({
  allowOverlap = null,
  children,
  onChange = null,
  onFinalChange = null,
  renderMark = null,
  trackProps,
  values = [],
  ...inputProps
}: MntRangeInputProps) => {
  return (
    <Range
      renderTrack={({ props, children: trackChildren }) => (
        <MntRangeTrack {...props} {...trackProps}>
          {trackChildren}
        </MntRangeTrack>
      )}
      renderThumb={({ props, value }) => {
        return (
          <div
            {...props}
            style={{ ...props.style, outline: 'none' }}
            aria-label='MntRangeInput Thumb'
          >
            {typeof children === 'function' ? children(value) : children}
          </div>
        );
      }}
      allowOverlap={allowOverlap}
      onChange={onChange}
      onFinalChange={onFinalChange}
      renderMark={renderMark}
      values={values}
      {...inputProps}
    />
  );
};

MntRangeInput.displayName = 'MntRangeInput';

MntRangeInput.Thumb = mnt('div')`
  mnt-range-input-thumb
`;
