import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor() { }
  add(...param: number[]): number { return param.reduce((x, y) => x + y); }
}
