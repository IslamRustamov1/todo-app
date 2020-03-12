import { observable, decorate, action } from 'mobx';

import { RootStoreType } from '../types/types';

export default class FilterStore {
  rootStore: RootStoreType;

  constructor(rootStore: RootStoreType) {
    this.rootStore = rootStore;
  }

  filter = 'all';

  changeFilterType = (type: string) => {
    this.filter = type;
  };
}

decorate(FilterStore, {
  filter: observable,
  changeFilterType: action,
});
