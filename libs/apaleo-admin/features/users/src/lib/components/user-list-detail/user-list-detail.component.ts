import { Component } from '@angular/core';

@Component({
    selector: 'apaleo-admin-users-list-detail',
    templateUrl: './user-list-detail.component.html',
    styleUrls: ['./user-list-detail.component.scss'],
})
export class UserListDetailComponent {

  public user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 28,
    address: {
      street: '123 Main St',
      city: 'London'
    },
    imageUrl: 'https://fakeimg.pl/200x200?text=Profile&font=lobster'
  };
}
