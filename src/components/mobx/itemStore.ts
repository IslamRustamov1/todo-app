/* eslint-disable no-param-reassign */
import { observable, computed, decorate, action, toJS } from 'mobx';
import { RootStoreType, ItemType } from '../types/types';

export default class ItemStore {
  items: ItemType[] = [];

  IDcounter = 0;

  rootStore: RootStoreType;

  constructor(rootStore: RootStoreType) {
    this.rootStore = rootStore;
  }

  get amount() {
    const arr = toJS(this.items);

    return arr.filter((item: ItemType) => !item.completed).length;
  }

  editItemValue = (editedItem: ItemType) => {
    const itemsCopy = this.items.map((item: ItemType) => {
      if (item.id === editedItem.id) {
        item = editedItem;
        item.editing = !item.editing;
      }
      return item;
    });

    this.items = itemsCopy;
  };

  addNewItem = (val: string) => {
    const newItem = {
      id: this.IDcounter,
      value: val,
      completed: false,
      editing: false,
    };

    this.IDcounter += 1;

    this.items.push(newItem);
  };

  deleteItem = (deletedItem: ItemType) => {
    this.items = this.items.filter(
      (item: ItemType) => item.id !== deletedItem.id,
    );
  };

  checkItem = (completedItemID: number) => {
    const completedItem: ItemType | undefined = this.items.find(
      (item: ItemType) => item.id === completedItemID,
    );

    completedItem!.completed = !completedItem!.completed;
  };

  clearAllCompleted = () => {
    this.items = this.items.filter((item: ItemType) => !item.completed);
  };

  get filterItems() {
    let filteredItems: ItemType[] = [];
    const items = toJS(this.items);

    switch (this.rootStore.FILTER_STORE.filter) {
      case 'all':
        filteredItems = items;
        break;
      case 'completed':
        filteredItems = items.filter(
          (item: ItemType) => item.completed === true,
        );
        break;
      case 'active':
        filteredItems = items.filter(
          (item: ItemType) => item.completed === false,
        );
        break;
      default:
        break;
    }

    return filteredItems;
  }

  completeAllItems = () => {
    if (this.items.every(item => item.completed)) {
      const changedItems = this.items.map(item => {
        item.completed = false;
        return item;
      });

      this.items = changedItems;
    } else {
      const changedItems = this.items.map(item => {
        item.completed = true;
        return item;
      });

      this.items = changedItems;
    }
  };

  showClearCompletedButton = () => {
    return this.items.some(item => item.completed);
  };

  showEditWindow = (changedItemID: number) => {
    const itemsCopy = this.items.map(item => {
      if (changedItemID === item.id) {
        item.editing = !item.editing;
      }
      return item;
    });

    this.items = itemsCopy;
  };
}

decorate(ItemStore, {
  items: observable,
  amount: computed,
  filterItems: computed,
  addNewItem: action,
  clearAllCompleted: action,
  deleteItem: action,
  completeAllItems: action,
  showClearCompletedButton: action,
  showEditWindow: action,
  editItemValue: action,
});
