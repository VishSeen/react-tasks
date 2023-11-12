import styled from 'styled-components';


const StyledButton = styled.div`
    height: 40px;
    border-radius: 8px;
    background-color: ${props => props.theme.accentColor};

    &.filled {
        border: 1px solid ${props => props.theme.accentColor};
        background-color: ${props => props.theme.accentColor};
    }
    &.outlined {
        border: 1px solid ${props => props.theme.accentColor};
        background-color: transparent;
    }

    button {
        width: 100%;
        height: 100%;
        padding: 16px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default StyledButton;