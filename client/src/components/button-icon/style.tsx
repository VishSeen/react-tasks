import { styled } from 'styled-components';


const StyledButtonIcon = styled.div`
    border: none;
    color: ${props => props.theme.color.text.textColor};
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
            opacity: 0.5;
            color: ${props => props.theme.color.text.textColor};
        }
    }


    &.mini {
        button span {
            font-size: 15px;
            @media screen and (min-width: 992px) {
                font-size: 16px;
            }
        }
    }

    &.normal {
        button span {
            font-size: 20px;
            @media screen and (min-width: 992px) {
                font-size: 24px;
            }
        }
    }

    &.small {
        button span {
            font-size: 16px;
            @media screen and (min-width: 992px) {
                font-size: 18px;
            }
        }
    }
`;

export default StyledButtonIcon;