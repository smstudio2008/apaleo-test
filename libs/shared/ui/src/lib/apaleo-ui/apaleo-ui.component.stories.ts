import type { Meta, StoryObj } from '@storybook/angular';
import { ApaleoUiComponent } from './apaleo-ui.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ApaleoUiComponent> = {
  component: ApaleoUiComponent,
  title: 'ApaleoUiComponent',
};
export default meta;
type Story = StoryObj<ApaleoUiComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/apaleo-ui works!/gi)).toBeTruthy();
  },
};
