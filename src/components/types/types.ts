export interface ItemType {
  id: number;
  value: string;
  completed: boolean;
  editing: boolean;
}

export interface RequestOptionsType {
  token: string;
}

export interface NetworkClientType {
  postRequest: Function;
  getRequest: Function;
}

export interface FilterStoreType {
  filter: string;
  changeFilterType: Function;
}

export interface ItemStoreType {
  items: ItemType[];
  amount: number;
  filterItems: ItemType[];
  checkItem: Function;
  addNewItem: Function;
  clearAllCompleted: Function;
  deleteItem: Function;
  completeAllItems: Function;
  showClearCompletedButton: Function;
  showEditWindow: Function;
  editItemValue: Function;
}

export interface RootStoreType {
  ITEM_STORE: ItemStoreType;
  FILTER_STORE: FilterStoreType;
}

export interface TokenType {
  token: string;
}

export interface TodoFooterProps {
  itemsAmount: number;
  showClearCompleted: Function;
  handleFilterChange: Function;
  handleClearCompleted: Function;
}

export interface TodoItemProps {
  item: ItemType;
  handleEditBlur: Function;
  handleEditFinish: Function;
  handleCheckItem: Function;
  handleEditShow: Function;
  handleDeleteItem: Function;
}

export interface TodoInputProps {
  handleCheckAllClick: Function;
  handleItemAddition: Function;
}
