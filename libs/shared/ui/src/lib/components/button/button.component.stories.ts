import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ButtonComponent> = {
    component: ButtonComponent,
    title: 'ButtonComponent',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
    args: {
        label: 'Button',
        type: 'primary',
        disabled: false,
        icon: '',
    },
};

export const Heading: Story = {
    args: {
        label: 'Button',
        type: 'primary',
        disabled: false,
        icon: '',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        expect(canvas.getByText(/button works!/gi)).toBeTruthy();
    },
};
