import React from 'react';
import { observer } from 'mobx-react';
import { TodoInputProps } from '../../types/types';

import './TodoInputField.css';

export const TodoInputField = observer((props: TodoInputProps) => {
  const { handleCheckAllClick, handleItemAddition } = props;
  return (
    <div className="todo-input-field">
      <button
        type="button"
        className="fa fa-3x fa-angle-down todo-input-field__button"
        onClick={() => handleCheckAllClick()}
      />
      <input
        type="text"
        className="todo-input-field__input"
        placeholder="What needs to be done?"
        onKeyPress={e => {
          handleItemAddition(e.which, e.currentTarget.value);
          if (e.which === 13) e.currentTarget.value = '';
        }}
      />
    </div>
  );
});
