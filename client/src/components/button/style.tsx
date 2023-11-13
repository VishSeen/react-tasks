import styled from 'styled-components';


const StyledButton = styled.div`
    width: fit-content;
    height: 40px;
    border-radius: 8px;
    background-color: ${props => props.theme.accentColor};
    &.filled {
        border: 1px solid ${props => props.theme.accentColor};
        background-color: ${props => props.theme.accentColor};
        button {
            color: ${props => props.theme.backgroundNavColor};
        }
    }
    &.outlined {
        border: 2px solid ${props => props.theme.accentColor};
        background-color: transparent;
        button {
            color: ${props => props.theme.accentColor};
        }
    }

    :hover {
    }


    button {
        font-weight: 500;
        width: 100%;
        height: 100%;
        padding: 16px 20px;
        justify-content: center;

        span.text {
            font-size: 13px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            text-transform: uppercase;
        }
    }
    button .content {
        gap: 5px;
        .icon {
            font-size: 18px;
        }
    }
    button, .content {
        display: flex;
        align-items: center;
    }
`;

export default StyledButton;