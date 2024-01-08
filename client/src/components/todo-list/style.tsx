import styled from 'styled-components';

export const StyledTodoList = styled.div`
  max-width: 320px;

  .todo-item:not(:last-child) {
    margin-bottom: 17px;
  }
`;

export const StyledListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h6 {
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    color: ${(props) => props.theme.color.accent};
  }

  span {
    background: #fdb8271c;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    color: ${(props) => props.theme.color.accent};
    font-size: 8px;
    line-height: 12px;
  }
`;

export const StyledDivider = styled.hr`
  margin: 10px 0 20px 0;
  border: 1.8px solid ${(props) => props.theme.color.accent};
`;
