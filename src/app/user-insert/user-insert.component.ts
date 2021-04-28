import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '@app/model/user';
import { UserService } from '@app/service/user.service';
import { UserFormComponent } from '@app/user-form/user-form.component';

@Component({
  selector: 'app-user-insert',
  templateUrl: './user-insert.component.html',
  styleUrls: ['./user-insert.component.css']
})
export class UserInsertComponent implements OnInit {

  user: User | undefined;
  @ViewChild('child1')
  child1: UserFormComponent | undefined;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  save(): void {
    this.user = this.child1?.user;
    console.log(this.user?.id);
    this.userService.save(this.user).subscribe(val => {
      val > 0 ? alert(`成功登陆了${val}条数据`) : alert(`登录失败`);
    });
  }
}
