export interface ItemType {
  id: number;
  value: string;
  completed: boolean;
  editing: boolean;
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
