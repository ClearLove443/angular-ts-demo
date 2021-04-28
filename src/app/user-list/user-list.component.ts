import { Component, OnInit, ViewChild } from '@angular/core';
import { UserFormComponent } from '@app/user-form/user-form.component';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  columnDefs = [
    { field: 'id' },
    { field: 'nickName' },
    { field: 'userSex'}
  ];
  // rowData = [
//     { make: 'Toyota', model: 'Celica', price: 35000 },
//     { make: 'Ford', model: 'Mondeo', price: 32000 },
//     { make: 'Porsche', model: 'Boxter', price: 72000 }
// ];

  user: User | undefined;
  @ViewChild('child1')
  child1: UserFormComponent | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }
  searchByCondition(): void {
    this.user = this.child1?.user;
    this.userService.searchByCondition(this.user).subscribe(val => {
      console.log(val);
      this.users = val;
    });
  }
}
