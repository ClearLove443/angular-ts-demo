import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonService } from '@app/service/common.service';
import { PcServiceService } from '@app/service/PcServiceService';
import { AgGridAngular } from 'ag-grid-angular';
import { ButtonRendererComponent } from './button-renderer.component';

@Component({
  selector: 'app-common-select-delete-update',
  templateUrl: './common-select_delete_update.component.html',
  styleUrls: ['./common-select_delete_update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommonSelectDeleteUpdateComponent implements OnInit {

  rowData!: any;
  defaultColDef!: any;
  frameworkComponents!: any;
  rowDataClicked1 = {};
  gridOptions = {
    pagination: true,
    page: '页'
  };
  // gridOptions = {
  //   onRowClicked: (event: any) => console.log('A row was clicked'),
  // };
  columnDefs!: any;
  form!: any;
  gridApi!: any;
  gridColumnApi!: any;
  @ViewChild('agGrid') agGrid!: AgGridAngular;

  constructor(private commonService: CommonService, public service: PcServiceService) {

    this.columnDefs = [
      {
        field: 'athlete',
        cellRenderer: 'buttonRenderer',
        cellRendererParams: {
          onClick: this.onBtnClick.bind(this),
          label: 'Click 1'
        }
      },
      { field : 'id'},
      // { field: 'id', sortable: true, checkboxSelection: true },
      { field: 'nickName' },
      { field: 'userSex' }
    ];
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    };
    this.defaultColDef = {
      flex: 1,
      minWidth: 110,
      editable: false,
      resizable: true,
      pagination: false
    };

    // 订阅消息
    service.emitChangeSource.subscribe(text => {
      this.form = text;
    });
  }
  onBtnClick(e: { rowData: {}; }): void {
    this.rowDataClicked1 = e.rowData;
    alert(JSON.stringify(this.rowDataClicked1));
  }

  onGridReady(params: any): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  ngOnInit(): void {
  }

  onPaginationChanged(): void {
    console.log('onPaginationPageLoaded');
    if (this.gridApi) {
      this.setText('#lbLastPageFound', this.gridApi.paginationIsLastPageFound());
      this.setText('#lbPageSize', this.gridApi.paginationGetPageSize());
      this.setText('#lbCurrentPage', this.gridApi.paginationGetCurrentPage() + 1);
      this.setText('#lbTotalPages', this.gridApi.paginationGetTotalPages());
      // this.setLastButtonDisabled(!this.gridApi.paginationIsLastPageFound());
    }
  }

  setText(selector: string, text: any): void {
    const selectorStr = document.querySelector(selector);
    if (!!selectorStr) {
      selectorStr.innerHTML = text;
    }
  }

  // setLastButtonDisabled(disabled: any): void {
  //   const selectorStr = document.querySelector('#btLast');
  //   if (!!selectorStr) {
  //     // selectorStr.disabled = disabled;
  //   }
  // }

  onBtFirst(): void {
    this.gridApi.paginationGoToFirstPage();
  }

  onBtLast(): void {
    this.gridApi.paginationGoToLastPage();
  }

  onBtNext(): void {
    this.gridApi.paginationGoToNextPage();
  }

  onBtPrevious(): void {
    this.gridApi.paginationGoToPreviousPage();
  }

  onBtPageFive(): void {
    this.gridApi.paginationGoToPage(4);
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
        // this.searchByCondition();
        alert(`成功更新了${val}条数据`);
      } else {
        alert(`更新失败`);
      }
    },(error: Error) =>  alert(error.message));
  }

  onRowSelect(event: { data: any; }): void {
    console.log(event.data);
    alert(event.data);
  }
}
