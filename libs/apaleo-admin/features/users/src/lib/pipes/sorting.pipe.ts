import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '@apaleo-admin/domain';

@Pipe({
    name: 'sorting',
})
export class SortingPipe implements PipeTransform {
    public transform(cards: IUser[] | null | undefined, sortOrder: string | undefined): IUser[] | null | undefined {
        if (!cards || !sortOrder) return cards;

        // Create a copy of the array to avoid mutating the original
        const sortedCards = [...cards];

        return sortedCards.sort((a, b) => {
            const comparison = a.firstName.localeCompare(b.firstName);
            return sortOrder === 'asc' ? comparison : -comparison;
        });
    }
}
