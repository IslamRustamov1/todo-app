import React from 'react';
import { observer } from 'mobx-react';
import { TodoInputField } from '../TodoInputField/TodoInputField';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoFooter } from '../TodoFooter/TodoFooter';
import { ItemType } from '../types/types';
import rootStore from '../mobx/rootStore';

import './TodoForm.css';

const TodoForm = observer(() => {
  const rootStoreContext = React.useContext(rootStore);

  const {
    items,
    amount,
    completeAllItems,
    addNewItem,
    filterItems,
    deleteItem,
    showEditWindow,
    checkItem,
    clearAllCompleted,
    showClearCompletedButton,
    editItemValue
  } = rootStoreContext.ITEM_STORE;

  const { changeFilterType } = rootStoreContext.FILTER_STORE;

  function handleEditBlur(editedItem: ItemType, value: string) {
    if (value !== '') {
      editedItem.value = value;
    }

    editItemValue(editedItem);
  }

  // Close edit window if Enter key pressed
  function handleEditKeyPressed(
    editedItem: ItemType,
    value: string,
    pressedKey: number
  ) {
    if (pressedKey !== 13) {
      return;
    }

    if (value !== '') {
      editedItem.value = value;
    }

    editItemValue(editedItem);
  }

  function handleItemAddition(keyPressed: number, value: string) {
    if (keyPressed !== 13 || value.length === 0) {
      return;
    }

    addNewItem(value);
  }

  return (
    <div className="todo-form">
      <div className="todo-form__container">
        <TodoInputField
          handleCheckAllClick={completeAllItems}
          handleItemAddition={handleItemAddition}
        />
        {filterItems.map((item: ItemType) => (
          <TodoItem
            key={item.id}
            item={item}
            handleDeleteItem={deleteItem}
            handleEditShow={showEditWindow}
            handleEditBlur={handleEditBlur}
            handleEditFinish={handleEditKeyPressed}
            handleCheckItem={checkItem}
          />
        ))}
        {items.length > 0 && (
          <TodoFooter
            itemsAmount={amount}
            handleFilterChange={changeFilterType}
            handleClearCompleted={clearAllCompleted}
            showClearCompleted={showClearCompletedButton}
          />
        )}
      </div>
      {items.length > 0 && (
        <div className="todo-form__background-container">
          <div className="todo-form__background-element1" />
          <div className="todo-form__background-element2" />
        </div>
      )}
    </div>
  );
});

export default TodoForm;
