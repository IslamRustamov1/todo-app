import { observable, computed, decorate, action, toJS } from 'mobx';

export class ItemStore {
  items = [];
  IDcounter = 0;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  get amount() {
    const arr = toJS(this.items);

    return arr.filter(item => !item.completed).length;
  }

  editItemValue = editedItem => {
    const itemsCopy = this.items.map(item => {
      if (item.id === editedItem.id) {
        item = editedItem;
        item.editing = !item.editing;
      }
      return item;
    });

    this.items = itemsCopy;
  };

  addNewItem = value => {
    const newItem = {
      id: this.IDcounter,
      value: value,
      completed: false,
      editing: false
    };

    this.IDcounter += 1;

    this.items.push(newItem);
  };

  deleteItem = deletedItem => {
    this.items = this.items.filter(item => item.id !== deletedItem.id);
  };

  checkItem = completedItemID => {
    const completedItem = this.items.find(item => item.id === completedItemID);

    completedItem.completed = !completedItem.completed;
  };

  clearAllCompleted = () => {
    this.items = this.items.filter(item => !item.completed);
  };

  get filterItems() {
    let filteredItems = [];
    const items = toJS(this.items);

    switch (this.rootStore.FILTER_STORE.filter) {
      case 'all':
        filteredItems = items;
        break;
      case 'completed':
        filteredItems = items.filter(item => item.completed === true);
        break;
      case 'active':
        filteredItems = items.filter(item => item.completed === false);
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

  showEditWindow = changedItemID => {
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
  editItemValue: action
});
