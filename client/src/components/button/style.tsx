import styled from 'styled-components';


const StyledButton = styled.div`
    width: fit-content;
    height: 40px;
    border-radius: 8px;
    background-color: ${props => props.theme.color.accent};
    transition: 0.2s all ease-in;
    &.filled {
        border: 1px solid ${props => props.theme.color.accent};
        background-color: ${props => props.theme.color.accent};
        &:hover {
            background-color: ${props => props.theme.hover.fabBtn};
        }
        button {
            color: ${props => props.theme.color.text.textAlwaysDark};
        }
    }
    &.outlined {
        border: 2px solid ${props => props.theme.color.accent};
        background-color: transparent;
        button {
            color: ${props => props.theme.color.accent};
        }
    }



    button {
        font-weight: 500;
        width: 100%;
        height: 100%;
        padding: 16px 24px;
        justify-content: center;

        span.text {
            font-size: 12px;
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