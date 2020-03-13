import React from 'react';
import { observer } from 'mobx-react';
import { TodoFooterProps } from '../types/types';

import './TodoFooter.css';

export const TodoFooter = observer((props: TodoFooterProps) => {
  const {
    itemsAmount,
    showClearCompleted,
    handleFilterChange,
    handleClearCompleted,
  } = props;
  return (
    <div className="todo-footer">
      <div className="todo-footer__container">
        <span className="todo-footer__span">
          {itemsAmount} {itemsAmount === 1 ? 'item' : 'items'} left
        </span>
        <div className="todo-footer__radio-container">
          <input
            type="radio"
            name="radio"
            className="todo-footer__radio"
            id="all"
            onClick={(e: React.MouseEvent<HTMLInputElement>) =>
              handleFilterChange(e.currentTarget.id)
            }
            defaultChecked
          />
          <label className="todo-footer__label" htmlFor="all">
            All
          </label>
          <input
            type="radio"
            name="radio"
            className="todo-footer__radio"
            id="active"
            onClick={(e: React.MouseEvent<HTMLInputElement>) =>
              handleFilterChange(e.currentTarget.id)
            }
          />
          <label className="todo-footer__label" htmlFor="active">
            Active
          </label>
          <input
            type="radio"
            name="radio"
            className="todo-footer__radio"
            id="completed"
            onClick={(e: React.MouseEvent<HTMLInputElement>) =>
              handleFilterChange(e.currentTarget.id)
            }
          />
          <label className="todo-footer__label" htmlFor="completed">
            Completed
          </label>
        </div>
      </div>
      {showClearCompleted && (
        <button
          type="button"
          className="todo-footer__button"
          onClick={() => handleClearCompleted()}
        >
          Clear completed
        </button>
      )}
    </div>
  );
});
