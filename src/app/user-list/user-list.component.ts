import { Component, OnInit } from '@angular/core';
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
user: User = new User;
// rowData = [
//     { make: 'Toyota', model: 'Celica', price: 35000 },
//     { make: 'Ford', model: 'Mondeo', price: 32000 },
//     { make: 'Porsche', model: 'Boxter', price: 72000 }
// ];
  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }
  searchByCondition(): void {
    // tslint:disable-next-line: deprecation
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
    this.userService.save(this.user);
  }
  save(): void {
    console.log(this.user.id);
    // tslint:disable-next-line: deprecation
    this.userService.save(this.user);
  }
}
