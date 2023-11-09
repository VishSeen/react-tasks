import {styled} from 'styled-components';


const StyledButtonIcon = styled.div`
    border: none;
    color: ${props => props.theme.textColor};
    opacity: 0.5;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    :hover {
        cursor: pointer;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            color: ${props => props.theme.textColor};
        }
    }


    &.mini {
        button span {
            font-size: 16px;
        }
    }

    &.normal {
        button span {
            font-size: 24px;
        }
    }

    &.small {
        button span {
            font-size: 18px;
        }
    }
`;

export default StyledButtonIcon;