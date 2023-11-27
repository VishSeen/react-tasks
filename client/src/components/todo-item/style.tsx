import styled, { css } from 'styled-components';
import ButtonIcon from '../button-icon/button-icon';
import ChipTag from '../chip-tag/chip-tag';

export const StyledTodoItem = styled.div<{ isCompleted: boolean }>`
  max-width: 320px;
  border: 1px solid ${(props) => props.theme.hoverBackgroundColor};
  border-radius: 10px;
  padding: 20px;
  box-shadow: ${(props) => props.theme.boxShadow};
  ${(props) =>
    props.isCompleted &&
    css`
      background-color: #37952e29;
    `}
`;

export const StyledTodoItemHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTodoTitle = styled.h6<{ isCompleted: boolean }>`
  flex: 1;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  color: ${(props) => props.theme.textColor};

  ${(props) =>
    props.isCompleted &&
    css`
      text-decoration: line-through;
    `}
`;

export const StyledCheckbox = styled.input`
  margin-right: 8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 4px solid ${(props) => props.theme.backgroundNavColor};
  outline: none;
  appearance: none;

  &:checked {
    background-color: ${(props) => props.theme.accentColor};
  }
`;

export const StyledButtonIcon = styled(ButtonIcon)`
  padding: 0;
  opacity: 1;
`;

export const StyledTodoCopy = styled.p`
  font-weight: 300;
  font-size: 7px;
  line-height: 10px;
  color: ${(props) => props.theme.textColor};
  margin-top: 13px;
`;

export const StyledChipTag = styled(ChipTag)`
  width: 35px;
  height: 10px;
  margin-top: 13px;

  span {
    font-size: 4px;
    font-weight: 500;
    line-height: 6px;
  }
`;
