import React, { useState } from 'react';
import { Container, Text } from '@mountain-ui/doc-tools';
import { Meta, StoryObj } from '@storybook/react';

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

const colors = Object.keys(ICON_COLORS) as MntIconColor[];
const sizes = Object.keys(ICON_SIZES) as MntIconSize[];
const variants = Object.keys(ICON_VARIANTS) as MntIconVariant[];

const meta = {
  title: 'MntIcon',
  component: MntIcon,
  tags: ['autodocs']
} satisfies Meta<typeof MntIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    color: 'current',
    size: 'm',
    variant: 'icon',
    withTransition: false
  },
  render: args => {
    return <Icons.Mountains {...args} />;
  }
};

export const Variant: Story = {
  args: {
    variant: 'icon'
  },
  render: args => {
    return (
      <div className='flex'>
        {variants.map(variant => (
          <Icons.Mountains key={variant} variant={variant} {...args} />
        ))}
      </div>
    );
  }
};

export const Color: Story = {
  render: args => {
    return (
      <div className='flex'>
        {colors.map(color => (
          <Icons.Mountains key={color} {...args} color={color} />
        ))}
      </div>
    );
  }
};

export const Size: Story = {
  render: args => {
    return (
      <div className='flex'>
        {sizes.map(size => (
          <Icons.Mountains key={size} {...args} size={size} />
        ))}
      </div>
    );
  }
};

export const All: Story = {
  parameters: {
    storyshots: { disable: true }
  },
  render: () => {
    const [search, setSearch] = useState('');

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e =>
      setSearch(e.target.value.toLowerCase());

    return (
      <Container>
        <input
          placeholder='React, Arrow, Github...'
          onChange={handleChange}
          value={search}
          className='mb-3'
        />
        <div className='grid grid-cols-3 gap-3'>
          {Object.entries(Icons)
            .filter(([name]) => name.toLowerCase().includes(search))
            .map(([name, CurrentIcon]) => {
              return (
                <div
                  className='w-full flex gap-4 shadow-xl p-3 rounded-lg items-center text-xl'
                  key={name}
                >
                  <CurrentIcon />
                  <Text className='bold text-light'>{name}</Text>
                </div>
              );
            })}
        </div>
      </Container>
    );
  }
};
