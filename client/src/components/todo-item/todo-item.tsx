import { FC, useState } from 'react';
import { TodoItemProps } from '../../types/ComponentProps';
import * as S from './style';

export const TodoItem: FC<TodoItemProps> = (props) => {
  const { className = '', isCompleted: initialCompleted, copy, tag, title } = props;
  const baseClassName = 'todo-item';
  const [isCompleted, setIsCompleted] = useState(initialCompleted);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <>
      <S.StyledTodoItem className={`${className} ${baseClassName}`}>
        <S.StyledTodoItemHeader className={`${baseClassName}__header`}>
          <S.StyledCheckbox
            className={`${baseClassName}__checkbox`}
            type="checkbox"
            name="tbd"
            checked={isCompleted}
            onChange={handleComplete}
          />
          <S.StyledTodoTitle isCompleted={isCompleted}>{title}</S.StyledTodoTitle>
          <S.StyledButtonIcon
            className={`${baseClassName}__menu`}
            icon="more_vert"
            size="small"
          />
        </S.StyledTodoItemHeader>
        {copy && <S.StyledTodoCopy className={`${baseClassName}__copy`}>{copy}</S.StyledTodoCopy>}
        {tag && (
          <S.StyledChipTag
            className={`${baseClassName}__tag`}
            tag={tag}
          />
        )}
      </S.StyledTodoItem>
    </>
  );
};
