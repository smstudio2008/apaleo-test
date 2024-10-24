import type { Meta, StoryObj } from '@storybook/angular';
import { PaginationComponent } from './pagination.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PaginationComponent> = {
    component: PaginationComponent,
    title: 'PaginationComponent',
};
export default meta;
type Story = StoryObj<PaginationComponent>;

export const Primary: Story = {
    args: {
        totalItems: 0,
        pageSize: 10,
        currentPage: 0,
    },
};

export const Heading: Story = {
    args: {
        totalItems: 0,
        pageSize: 10,
        currentPage: 0,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        expect(canvas.getByText(/pagination works!/gi)).toBeTruthy();
    },
};
