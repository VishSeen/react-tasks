import styled from 'styled-components';

const StyledChip = styled.div`
    width: 80px;
    padding: 3px 6px;
    text-align: center;
    color: ${props => props.theme.color.text.textColor};
    border-radius: 17px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        color: ${props => props.theme.color.white};
        text-align: center;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    &.important {
        background-color: #DA4302;
    }
    &.shopping {
        background-color: #FF935C;
    }
    &.work {
        background-color: #00818A;
    }
    &.personal {
        background-color: #6B8C42;
    }
`;

export default StyledChip;