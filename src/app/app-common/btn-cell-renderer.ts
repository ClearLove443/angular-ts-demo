
import { Component, OnDestroy } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular/public-api";
import { ICellRendererParams } from "_ag-grid-community@25.2.1@ag-grid-community";


@Component({
  selector: "btn-cell-renderer",
  template: `<button (click)=btnClickedHandler($event)>Click me!</button>`
})
export class BtnCellRenderer implements ICellRendererAngularComp, OnDestroy {
  refresh(params: ICellRendererParams): boolean {
      throw new Error("Method not implemented.");
  }
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  btnClickedHandler(params: any) {
    this.params.clicked(this.params.value);
  }

  ngOnDestroy() {
    // no need to remove the button click handler
    // https://stackoverflow.com/questions/49083993/does-angular-automatically-remove-template-event-listeners
  }
}
