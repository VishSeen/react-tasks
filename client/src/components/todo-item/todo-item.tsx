import { type FC } from 'react';
import { TodoItemProps } from '../../types/ComponentProps';
import * as S from './style';

export const TodoItem: FC<TodoItemProps> = (props) => {
  const { className, copy, tag, title } = props;

  return (
    <>
      <S.StyledTodoItem className={className}>
        <S.StyledTodoItemHeader className="todo-item__wrapper">
          <S.StyledCheckbox
            className="todo_item__checkbox"
            type="checkbox"
            name="tbd"
          />
          <h6>{title}</h6>
          <S.StyledButtonIcon
            className="todo_item__menu"
            icon="more_vert"
            size="small"
          />
        </S.StyledTodoItemHeader>
        {copy && <S.StyledTodoCopy>{copy}</S.StyledTodoCopy>}
        {tag && <S.StyledChipTag tag={tag} />}
      </S.StyledTodoItem>
    </>
  );
};
