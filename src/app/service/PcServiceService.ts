import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class PcServiceService {
    constructor() { }
    // 创建Subject实例
    emitChangeSource = new Subject<any>();
    // 创建Observable
    changeEmitted$ = this.emitChangeSource.asObservable();
    // 调用该方法发布消息
    emitChange(change: any): void {
        this.emitChangeSource.next(change);
    }
    // get(): any {
    //     return this.emitChangeSource.asObservable();
    // }
}
