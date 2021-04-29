import { Component } from '@angular/core';
import { User } from '@app/model/user';
import { PcServiceService } from '@app/service/PcServiceService';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: User = new User();

  constructor(public service: PcServiceService) {
  }
  changeValue(): void {
    // 调用服务发布消息
    this.service.emitChange(this.user);
  }
}
