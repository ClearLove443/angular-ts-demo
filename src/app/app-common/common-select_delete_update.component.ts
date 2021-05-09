import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '@app/service/common.service';
import { PcServiceService } from '@app/service/PcServiceService';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-common-select-delete-update',
  templateUrl: './common-select_delete_update.component.html',
  styleUrls: ['./common-select_delete_update.component.css']
})
export class CommonSelectDeleteUpdateComponent implements OnInit {

  rowData!: any;
  defaultColDef!: any;
  columnDefs = [
    { field: 'id', sortable: true, checkboxSelection: true },
    { field: 'nickName' },
    { field: 'userSex' }
  ];
  form!: any;
  @ViewChild('agGrid') agGrid!: AgGridAngular;

  constructor(private commonService: CommonService, public service: PcServiceService) {

    this.defaultColDef = {
      flex: 1,
      minWidth: 110,
      editable: true,
      resizable: true,
    };

    // 订阅消息
    service.emitChangeSource.subscribe(text => {
      this.form = text;
    });
  }

  ageCellRendererFunc(params: any): string {
    params.$scope.ageClicked = this.ageClicked;
    return '<button ng-click="ageClicked(data.age)" ng-bind="data.age"></button>';
  }
  ageClicked(age: string): void {
    window.alert('Age clicked: ' + age);
  }
  ngOnInit(): void {
  }
  searchByCondition(): void {
    this.commonService.searchByCondition(this.form).subscribe(val => {
      console.log(val);
      this.rowData = val;
    });
  }
  getSelectedRows(): any[] {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    return selectedData;
    // const selectedDataStringPresentation = selectedData?.map(node => `${node.id}`).join(', ');
    // alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  delSelectedRows(): void {
    // const selectedData = JSON.stringify(this.getSelectedRows());
    const selectedData = this.commonService.getSelectedRows(this.agGrid);
    this.commonService.delMoreRows(selectedData).subscribe(val => {
      if (val > 0) {
        this.searchByCondition();
        alert(`成功删除了${val}条数据`);
      } else {
        alert(`删除失败`);
      }
      // val > 0 ? alert(`成功删除了${val}条数据`) : alert(`删除失败`);
    });
  }

  update(): void {
    // const selectedData = JSON.stringify(this.getSelectedRows());
    const selectedData = this.commonService.getSelectedRows(this.agGrid)[0];
    this.commonService.updMoreRows(selectedData).subscribe(val => {
      if (val > 0) {
        this.searchByCondition();
        alert(`成功更新了${val}条数据`);
      } else {
        alert(`更新失败`);
      }
      // val > 0 ? alert(`成功删除了${val}条数据`) : alert(`删除失败`);
    });
  }
}
