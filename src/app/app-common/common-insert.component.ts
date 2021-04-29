import { Component, OnInit } from '@angular/core';
import { CommonService } from '@app/service/common.service';
import { PcServiceService } from '@app/service/PcServiceService';

@Component({
  selector: 'app-common-insert',
  templateUrl: './common-insert.component.html',
  styleUrls: ['./common-insert.component.css']
})
export class CommonInsertComponent implements OnInit {

  form!: any;
  constructor(private commonService: CommonService, public service: PcServiceService) {

    // 订阅消息
    service.emitChangeSource.subscribe(text => {
      console.log(text);
      this.form = text;
    });
  }

  ngOnInit(): void {
  }

  save(): void {
    this.commonService.save(this.form).subscribe(val => {
      val > 0 ? alert(`成功登陆了${val}条数据`) : alert(`登录失败`);
    });
  }
}
