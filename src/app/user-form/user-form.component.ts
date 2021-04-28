import { Component } from '@angular/core';
import { User } from '@app/model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: User = new User();

  constructor() {
    // this.user = new User();
  }
}
