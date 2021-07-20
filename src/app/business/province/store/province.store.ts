import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { ProvinceState } from '../store/province.model';

/**
 * Create initial state
 */
export function createInitialState(): ProvinceState {
  return {
    divisions: []
  };
}

/**
 * Province store
 *
 * @export
 * @class ProvinceStore
 * @extends {Store<ProvinceState>}
 */
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'province' })
export class ProvinceStore extends Store<ProvinceState> {

  constructor() {
    super(createInitialState());
  }
}
