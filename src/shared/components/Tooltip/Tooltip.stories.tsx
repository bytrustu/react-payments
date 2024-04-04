import { Meta, StoryObj } from '@storybook/react';
import { AppDisplay, Circle, styleToken, Tooltip, Typography } from '@/shared';

const meta: Meta<typeof Tooltip> = {
  title: 'Primitive/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <AppDisplay>
        <Story />
      </AppDisplay>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
  args: {},
};

export const WithBottom: Story = {
  args: {
    icon: (
      <Circle backgroundColor="unset" border={`1px solid ${styleToken.color.gray400}`} cursor="pointer">
        <Typography color={styleToken.color.gray400} variant="title" fontWeight={styleToken.fontWeight.bold}>
          ?
        </Typography>
      </Circle>
    ),
    direction: 'bottom',
  },
};

export const WithLeft: Story = {
  args: {
    icon: (
      <Circle backgroundColor="unset" border={`1px solid ${styleToken.color.gray400}`} cursor="pointer">
        <Typography color={styleToken.color.gray400} variant="title" fontWeight={styleToken.fontWeight.bold}>
          ?
        </Typography>
      </Circle>
    ),
    direction: 'left',
  },
};

export const WithRight: Story = {
  args: {
    icon: (
      <Circle backgroundColor="unset" border={`1px solid ${styleToken.color.gray400}`} cursor="pointer">
        <Typography color={styleToken.color.gray400} variant="title" fontWeight={styleToken.fontWeight.bold}>
          ?
        </Typography>
      </Circle>
    ),
    direction: 'right',
  },
};
