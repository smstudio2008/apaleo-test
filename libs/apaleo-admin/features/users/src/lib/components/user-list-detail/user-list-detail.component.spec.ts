/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserListDetailComponent } from './user-list-detail.component';
import { FilterSearchPipe } from '../../pipes/filter-search.pipe';
import { SortingPipe } from '../../pipes/sorting.pipe';

describe('UserListDetailComponent', () => {
  let component: UserListDetailComponent;
  let fixture: ComponentFixture<UserListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListDetailComponent ,FilterSearchPipe,SortingPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
