import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '@apaleo-admin/domain';

@Pipe({
    name: 'filterSearch',
   
})
export class FilterSearchPipe implements PipeTransform {
    public transform(items: IUser[] | null| undefined, searchText?: string): IUser[] {
        if (!items) return [];
        if (!searchText) return items;

        searchText = searchText.toLowerCase();

        return items.filter((item) => {
            return item?.firstName?.toLowerCase().includes(searchText);
        });
    }
}
