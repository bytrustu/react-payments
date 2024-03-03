import { Meta, StoryObj } from '@storybook/react';
import { CardDisplay } from './CardDisplay';
import { AppLayout } from '@/components';
import { styleToken } from '@/shared/styles';

const meta: Meta<typeof CardDisplay> = {
  title: 'Components/CardDisplay',
  component: CardDisplay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <AppLayout>
        <Story />
      </AppLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CardDisplay>;

export const Primary: Story = {
  render: () => (
    <CardDisplay
      size="small"
      label="Near 카드"
      color={styleToken.color.teal200}
      cardNumber="1234 1234 1234 1234"
      expirationDate="12 12"
      ownerName="Near"
    />
  ),
};

export const WithBackgroundColor: Story = {
  render: () => (
    <CardDisplay
      size="small"
      label="Near 카드"
      color={styleToken.color.gray200}
      cardNumber="1234 1234 1234 1234"
      expirationDate="12 12"
      ownerName="Near"
    />
  ),
};

export const WithSizeBig: Story = {
  render: () => (
    <CardDisplay
      size="big"
      label="Near 카드"
      color={styleToken.color.teal200}
      cardNumber="1234 1234 1234 1234"
      expirationDate="12 12"
      ownerName="Near"
    />
  ),
};

export const WithNoLabel: Story = {
  render: () => (
    <CardDisplay
      size="small"
      label=""
      color={styleToken.color.teal200}
      cardNumber="1234 1234 1234 1234"
      expirationDate="12 12"
      ownerName="Near"
    />
  ),
};