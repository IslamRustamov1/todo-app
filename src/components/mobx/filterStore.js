import { observable, decorate, action } from 'mobx';

export class FilterStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  filter = 'all';

  changeFilterType = type => {
    this.filter = type;
  };
}

decorate(FilterStore, {
  filter: observable,
  changeFilterType: action
});
