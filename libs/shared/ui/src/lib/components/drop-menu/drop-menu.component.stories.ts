import type { Meta, StoryObj } from '@storybook/angular';
import { DropdownComponent } from './drop-menu.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DropdownComponent> = {
    component: DropdownComponent,
    title: 'DropdownComponent',
};
export default meta;
type Story = StoryObj<DropdownComponent>;

export const Primary: Story = {
    args: {
        options: [],
        selectedOption: '',
    },
};

export const Heading: Story = {
    args: {
        options: [],
        selectedOption: '',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        expect(canvas.getByText(/drop-menu works!/gi)).toBeTruthy();
    },
};
