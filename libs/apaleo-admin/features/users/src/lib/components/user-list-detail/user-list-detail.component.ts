import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUser } from '@apaleo-admin/domain';

@Component({
    selector: 'apaleo-admin-users-list-detail',
    templateUrl: './user-list-detail.component.html',
    styleUrls: ['./user-list-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListDetailComponent {
    @Input() public userData: IUser[] | null | undefined;
    @Input() public search: string | undefined;
    @Input() public sort: string | undefined;
}
