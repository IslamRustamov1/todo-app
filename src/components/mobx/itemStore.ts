import { observable, computed, decorate, action, toJS } from 'mobx';
import { RootStoreType, ItemType } from '../types/types';
import { todo, appURL } from '../mobx/constants';

export default class ItemStore {
  items: ItemType[] = [];
  rootStore: RootStoreType;

  constructor(rootStore: RootStoreType) {
    this.rootStore = rootStore;

    if (localStorage.getItem('token')) this.requestAllTodos();
  }

  requestAllTodos = async () => {
    const todos = await todo.getRequest(appURL + 'api/user/todos', {});

    todos.forEach((elem: any) => {
      let item: ItemType = {
        id: toJS(elem)._id,
        value: toJS(elem).value,
        completed: toJS(elem).completed,
        editing: toJS(elem).editing,
      };
      this.items.push(item);
    });
  };

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

    todo.putRequest(appURL + 'api/user/todos/' + editedItem.id, {
      body: JSON.stringify(editedItem),
    });

    this.items = itemsCopy;
  };

  addNewItem = async (val: string) => {
    const newItem = {
      id: '',
      value: val,
      completed: false,
      editing: false,
    };

    await todo
      .postRequest(appURL + 'api/user/todos', {
        body: JSON.stringify(newItem),
      })
      .then(data => (newItem.id = data._id));

    this.items.push(newItem);
  };

  deleteItem = (deletedItem: ItemType) => {
    this.items = this.items.filter(
      (item: ItemType) => item.id !== deletedItem.id,
    );

    todo.deleteRequest(appURL + 'api/user/todos/' + deletedItem.id, {
      body: JSON.stringify(deletedItem),
    });
  };

  checkItem = (completedItemID: string) => {
    const completedItem: ItemType | undefined = this.items.find(
      (item: ItemType) => item.id === completedItemID,
    );

    completedItem!.completed = !completedItem!.completed;

    todo.putRequest(appURL + 'api/user/todos/' + completedItem!.id, {
      body: JSON.stringify(completedItem),
    });
  };

  clearAllCompleted = () => {
    this.items.forEach((item: ItemType) => {
      if (item.completed) {
        todo.deleteRequest(appURL + 'api/user/todos/' + item.id, {
          body: JSON.stringify(item),
        });
      }
    });
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
        todo.putRequest(appURL + 'api/user/todos/' + item!.id, {
          body: JSON.stringify(item),
        });
        return item;
      });

      this.items = changedItems;
    } else {
      const changedItems = this.items.map(item => {
        item.completed = true;
        todo.putRequest(appURL + 'api/user/todos/' + item!.id, {
          body: JSON.stringify(item),
        });
        return item;
      });

      this.items = changedItems;
    }
  };

  showClearCompletedButton = () => {
    return this.items.some(item => item.completed);
  };

  showEditWindow = (changedItemID: string) => {
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
  requestAllTodos: action,
  clearAllCompleted: action,
  deleteItem: action,
  completeAllItems: action,
  showClearCompletedButton: action,
  showEditWindow: action,
  editItemValue: action,
});
