import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ProvinceStore } from '../store/province.store';
import { ProvinceState } from '../store/province.model';

/**
 * Province query
 *
 * @export
 * @class ProvinceQuery
 * @extends {Query<ProvinceState>}
 */
@Injectable({ providedIn: 'root' })
export class ProvinceQuery extends Query<ProvinceState> {

  constructor(protected store: ProvinceStore) {
    super(store);
  }
}
