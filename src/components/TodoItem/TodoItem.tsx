import React from 'react';
import { observer } from 'mobx-react';
import { TodoItemProps } from '../../types/types';

import './TodoItem.css';

export const TodoItem = observer((props: TodoItemProps) => {
  const {
    item,
    handleEditBlur,
    handleEditFinish,
    handleCheckItem,
    handleEditShow,
    handleDeleteItem,
  } = props;
  return (
    <div className="todo-item">
      {item.editing ? (
        <input
          type="text"
          className="todo-item__input"
          autoFocus={true}
          defaultValue={item.value}
          onBlur={e => handleEditBlur(item, e.target.value)}
          onKeyPress={e =>
            handleEditFinish(item, e.currentTarget.value, e.which)
          }
        />
      ) : (
        <div className="todo-item__container">
          <div className="todo-item__checkbox-container">
            <input
              type="checkbox"
              className="todo-item__checkbox"
              id={item.id}
              onClick={() => handleCheckItem(item.id)}
              checked={item.completed}
            />
            <label className="todo-item__checkbox-label" htmlFor={item.id} />
          </div>
          <label
            className={
              item.completed ? 'todo-item__label_crossed' : 'todo-item__label'
            }
            onDoubleClick={() => handleEditShow(item.id)}
          >
            {item.value}
          </label>
          <button
            type="button"
            className="fa fa-times todo-item__button"
            onClick={() => handleDeleteItem(item)}
          />
        </div>
      )}
    </div>
  );
});
