//@ts-nocheck
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { MntInput } from '../Input';
import { MntBox, MntGrid } from '../Layout';
import { MntText } from '../Typography';

import {
  ICON_COLORS,
  ICON_SIZES,
  ICON_VARIANTS,
  MntIcon,
  MntIconColor,
  MntIconSize,
  MntIconVariant
} from './Icon';
import * as Icons from './icons';
import { MntIconType, typesToIconMap } from './typesToIconMap';

const colors = Object.keys(ICON_COLORS) as MntIconColor[];
const sizes = Object.keys(ICON_SIZES) as MntIconSize[];
const variants = Object.keys(ICON_VARIANTS) as MntIconVariant[];

const meta = {
  title: 'Atoms/MntIcon',
  component: MntIcon,
  tags: ['autodocs'],
  parameters: {}
} satisfies Meta<typeof MntIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    iconType: 'react',
    color: 'current',
    size: 'm',
    variant: 'icon',
    withTransition: false
  }
};

export const Variant: Story = {
  args: {
    iconType: 'react',
    variant: 'button'
  },
  render: args => {
    return (
      <div className='flex'>
        {variants.map(variant => (
          <MntIcon key={variant} {...args} variant={variant} />
        ))}
      </div>
    );
  }
};

export const Color: Story = {
  args: {
    iconType: 'react'
  },
  render: args => {
    return (
      <div className='flex'>
        {colors.map(color => (
          <MntIcon key={color} {...args} color={color} />
        ))}
      </div>
    );
  }
};

export const Size: Story = {
  args: {
    iconType: 'react'
  },
  render: args => {
    return (
      <div className='flex'>
        {sizes.map(size => (
          <MntIcon key={size} {...args} size={size} />
        ))}
      </div>
    );
  }
};

const types = Object.keys(typesToIconMap) as MntIconType[];
export const All: Story = {
  args: {
    iconType: 'react'
  },
  render: () => {
    const [search, setSearch] = useState('');

    const handleChange = e => setSearch(e.target.value.toLowerCase());

    return (
      <MntBox>
        <MntInput
          placeholder='React, Arrow, Github...'
          onChange={handleChange}
          value={search}
          className='mb-3'
        />
        <MntGrid columns={3}>
          {types
            .filter(type => type.toLowerCase().includes(search))
            .map(type => {
              const iconName = typesToIconMap[type];
              const Icon = Icons[iconName];

              return (
                <MntBox
                  className='w-full flex gap-4 shadow-xl p-3 rounded-lg items-center'
                  key={type}
                >
                  <Icon className='text-xl' />
                  <MntText bold>{type}</MntText>
                </MntBox>
              );
            })}
        </MntGrid>
      </MntBox>
    );
  }
};
