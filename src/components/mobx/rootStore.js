import React from 'react';
import { ITEM_STORE, FILTER_STORE } from './constants';
import { ItemStore } from './itemStore';
import { FilterStore } from './filterStore';

class RootStore {
  constructor() {
    this[ITEM_STORE] = new ItemStore(this);
    this[FILTER_STORE] = new FilterStore(this);
  }
}

const store = new RootStore();
const rootStore = React.createContext(store);

export default rootStore;
