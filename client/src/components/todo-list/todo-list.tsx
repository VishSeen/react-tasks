import { type FC } from 'react';
import { TodoListProps } from '../../types/ComponentProps';
import { TodoItem } from '../todo-item/todo-item';
import * as S from './style';

export const TodoList: FC<TodoListProps> = (props) => {
  const { className = '', list } = props;
  const baseClassName = 'todo-list';

  return (
    <>
      <S.StyledTodoList className={`${baseClassName} ${className}`}>
        <S.StyledListHeader>
          <h6>Ongoing</h6>
          <span>5</span>
        </S.StyledListHeader>
        <S.StyledDivider />
        {list &&
          list.map((item, index) => (
            <TodoItem
              copy={item.copy}
              key={index}
              tag={item.tag}
              title={item.title}
            />
          ))}
      </S.StyledTodoList>
    </>
  );
};
