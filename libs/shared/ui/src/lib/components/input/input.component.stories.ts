import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputComponent> = {
    component: InputComponent,
    title: 'InputComponent',
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
    args: {
        placeholder: 'Enter text',
        value: '',
        disabled: false,
    },
};

export const Heading: Story = {
    args: {
        placeholder: 'Enter text',
        value: '',
        disabled: false,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        expect(canvas.getByText(/input works!/gi)).toBeTruthy();
    },
};
