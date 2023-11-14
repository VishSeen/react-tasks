import styled from 'styled-components';
import ButtonIcon from '../button-icon/button-icon';
import ChipTag from '../chip-tag/chip-tag';

export const StyledTodoItem = styled.div`
  max-width: 320px;
  border: 1px solid ${(props) => props.theme.hoverBackgroundColor};
  border-radius: 10px;
  padding: 20px;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export const StyledTodoItemHeader = styled.div`
  display: flex;
  align-items: center;

  h6 {
    flex: 1;
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    color: ${(props) => props.theme.textColor};
  }
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
