import { Meta, StoryObj } from '@storybook/react';
import { AppLayout } from '@/components';
import { TextField, TypographyVariants, VStack, Label } from '@/shared/components';
import { storybookControls } from '@/shared/styles';

const meta: Meta<typeof Label> = {
  title: 'Primitive/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...storybookControls.argTypes,
    variant: {
      options: ['caption', 'title', 'body', 'subtitle', 'headline', 'display'],
    },
  },
  args: {
    variant: 'caption',
  },
  decorators: [
    (Story) => (
      <AppLayout>
        <Story />
      </AppLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  render: (args) => (
    <VStack>
      <Label htmlFor="payment-input" {...args}>
        Label
      </Label>
      <TextField id="payment-input" placeholder="Placeholder" />
    </VStack>
  ),
};

export const WithTypographyVariants: Story = {
  render: (args) => (
    <VStack gap="24px">
      {Object.values(TypographyVariants).map((variant) => (
        <Label key={variant} htmlFor={`input-${variant}`} {...args} variant={variant}>
          {`Label - ${variant}`}
        </Label>
      ))}
    </VStack>
  ),
};